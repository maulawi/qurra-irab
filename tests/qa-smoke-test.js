// QURRA I'rab — real browser smoke test (Playwright + Chromium)
//
// Requires: `npm install playwright` (or a Playwright install with a
// Chromium binary available) and a local static server pointed at this
// project's root, e.g.:
//   cd qurra-irab && python3 -m http.server 8743
//   node tests/qa-smoke-test.js http://localhost:8743
//
// Browser: by default Playwright's own managed Chromium is used (install
// it with `npx playwright install chromium`). To use a specific Chromium
// or Chrome binary instead, set the CHROMIUM_PATH environment variable
// to its full path, e.g.
//   PowerShell:  $env:CHROMIUM_PATH = 'C:\Path\To\chrome.exe'
//   bash:        CHROMIUM_PATH=/path/to/chromium node tests/qa-smoke-test.js
//
// This script was run against this exact codebase before handover —
// see ARCHITECTURE.md §9 for the pass/fail results of that run. Rerun
// it after any change that touches routing, rendering, exercises, or
// progress persistence, per HANDOVER_PROMPT.md's regression-check rule.
const { chromium } = require('playwright');

const BASE = process.argv[2] || 'http://localhost:8743';
let failures = [];
let passes = [];

function ok(label) { passes.push(label); console.log('PASS -', label); }
function fail(label, detail) { failures.push(label + (detail ? (' :: ' + detail) : '')); console.log('FAIL -', label, detail || ''); }

(async () => {
  const launchOptions = {
    headless: true,
    args: ['--disable-background-networking', '--disable-sync', '--disable-default-apps', '--disable-extensions', '--disable-component-update', '--disable-domain-reliability', '--disable-client-side-phishing-detection', '--no-first-run', '--no-default-browser-check']
  };
  if (process.env.CHROMIUM_PATH) launchOptions.executablePath = process.env.CHROMIUM_PATH;
  const browser = await chromium.launch(launchOptions);
  const consoleErrors = [];
  const pageErrors = [];

  const context = await browser.newContext();
  const page = await context.newPage();
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => pageErrors.push(String(err)));

  // 1. Load dashboard
  await page.goto(BASE + '/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const h1 = await page.textContent('#qi-app-content h1').catch(() => null);
  if (h1 && h1.length > 0) ok('Dashboard loaded with an h1 (" ' + h1 + ' ")'); else fail('Dashboard h1 missing');

  const navLinks = await page.$$eval('.qi-nav-link', els => els.map(e => e.textContent.trim()));
  if (navLinks.length === 3) ok('Nav has 3 links: ' + navLinks.join(', ')); else fail('Nav link count wrong', JSON.stringify(navLinks));

  // 2. Curriculum browser: all 48 chapters present
  await page.click('a.qi-nav-link[href="#/curriculum"]');
  await page.waitForTimeout(200);
  const cardCount = await page.$$eval('.qi-chapter-card', els => els.length);
  if (cardCount === 48) ok('Curriculum browser shows 48 chapter cards'); else fail('Chapter card count != 48', String(cardCount));

  // NOTE: this count tracks content progress, not app behavior — it's
  // (48 - number of chapters with hasLesson:true in curriculum.js) and
  // must be updated here each time a chapter is completed. 0 as of the
  // Tier 10 pass (2026-10-13): all 48 chapters (1 through 48) are now
  // built — Ch 48 (Tier 10, the final chapter) is new this pass. The
  // curriculum content build is complete.
  const placeholderBadges = await page.$$eval('.qi-badge--placeholder', els => els.length);
  if (placeholderBadges === 0) ok('0 chapters badged "not yet available" — all 48 chapters built'); else fail('Placeholder badge count != 0', String(placeholderBadges));

  // 3. Open Chapter 1 lesson (pilot)
  await page.goto(BASE + '/index.html#/lesson/1', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const lessonTitleAr = await page.textContent('.qi-lesson-title-ar').catch(() => null);
  if (lessonTitleAr && lessonTitleAr.includes('تعريفات')) ok('Chapter 1 lesson rendered with correct Arabic title'); else fail('Chapter 1 title wrong/missing', lessonTitleAr);

  const ruleBadge = await page.$('.qi-step-rule .qi-badge--source-derived');
  if (ruleBadge) ok('Rule section shows source-derived badge'); else fail('Rule section missing source-derived badge');

  const exampleBadge = await page.$('.qi-step-example .qi-badge--source-example');
  if (exampleBadge) ok('Worked example shows source-example badge'); else fail('Worked example missing source-example badge');

  // dir="rtl" check on Arabic sentence
  const exampleDir = await page.getAttribute('.qi-example-sentence', 'dir').catch(() => null);
  if (exampleDir === 'rtl') ok('Worked example sentence has dir="rtl"'); else fail('Worked example sentence missing dir="rtl"', exampleDir);
  const htmlDir = await page.getAttribute('html', 'dir');
  if (htmlDir === 'ltr') ok('Document root stays dir="ltr"'); else fail('Document root dir wrong', htmlDir);

  // word-by-word progressive reveal
  let rowCount = await page.$$eval('.qi-word-row', els => els.length);
  if (rowCount === 1) ok('Worked example starts with only 1 word revealed'); else fail('Initial revealed word count != 1', String(rowCount));
  const revealBtn = await page.$('.qi-step-example button.qi-btn--secondary');
  if (revealBtn) { await revealBtn.click(); await page.waitForTimeout(100); }
  rowCount = await page.$$eval('.qi-word-row', els => els.length);
  if (rowCount === 2) ok('Reveal-next-word button reveals the second word'); else fail('Word reveal did not advance', String(rowCount));

  // 4. Guided exercise: select correct answer, submit, check feedback
  const guidedExercise = await page.$('.qi-exercise--guided');
  if (!guidedExercise) fail('Guided exercise not found on Chapter 1');
  else {
    const radios = await guidedExercise.$$('input[type=radio]');
    // Chapter 1 guided exercise acceptedValues: ["damma-zahira"], first option is damma-zahira
    await radios[0].check();
    const submitBtn = await guidedExercise.$('button.qi-btn--primary');
    await submitBtn.click();
    await page.waitForTimeout(100);
    const feedbackClass = await guidedExercise.$eval('.qi-exercise-feedback', el => el.className);
    if (feedbackClass.includes('correct')) ok('Guided exercise: correct answer graded correct'); else fail('Guided exercise grading wrong', feedbackClass);
  }

  // 5. Independent exercise: select WRONG answer first, verify incorrect feedback + retry works
  const independentExercise = await page.$('.qi-exercise--independent');
  let lessonMarkedComplete = false;
  if (!independentExercise) fail('Independent exercise not found on Chapter 1');
  else {
    const radios = await independentExercise.$$('input[type=radio]');
    // Chapter 1 independent exercise acceptedValues: ["damma-muqaddara"]; option order: damma-zahira, damma-muqaddara, mahalli
    await radios[0].check(); // deliberately wrong
    let submitBtn = await independentExercise.$('button.qi-btn--primary');
    await submitBtn.click();
    await page.waitForTimeout(100);
    let feedbackClass = await independentExercise.$eval('.qi-exercise-feedback', el => el.className);
    if (feedbackClass.includes('incorrect')) ok('Independent exercise: wrong answer graded incorrect'); else fail('Independent exercise wrong-answer grading failed', feedbackClass);

    const retryBtn = await independentExercise.$('button.qi-btn--secondary');
    await retryBtn.click();
    await page.waitForTimeout(100);
    const radios2 = await independentExercise.$$('input[type=radio]');
    await radios2[1].check(); // damma-muqaddara (correct)
    submitBtn = await independentExercise.$('button.qi-btn--primary');
    await submitBtn.click();
    await page.waitForTimeout(100);
    feedbackClass = await independentExercise.$eval('.qi-exercise-feedback', el => el.className);
    if (feedbackClass.includes('correct')) ok('Independent exercise: retry then correct answer graded correct'); else fail('Independent exercise retry/correct grading failed', feedbackClass);
    lessonMarkedComplete = true;
  }

  // 6. localStorage progress check
  const progressRaw = await page.evaluate(() => window.localStorage.getItem('qurra-irab:progress:v1'));
  const progress = progressRaw ? JSON.parse(progressRaw) : null;
  if (progress && progress.exercises && Object.keys(progress.exercises).length >= 2) ok('Progress recorded to localStorage (' + Object.keys(progress.exercises).length + ' exercise attempts)');
  else fail('Progress not recorded to localStorage', progressRaw);
  if (progress && progress.lessonsCompleted && progress.lessonsCompleted['1']) ok('Chapter 1 lesson marked complete in localStorage'); else fail('Chapter 1 not marked complete', progressRaw);

  // 7. Refresh-safe routing: reload while on #/lesson/1
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(200);
  const titleAfterReload = await page.textContent('.qi-lesson-title-ar').catch(() => null);
  if (titleAfterReload && titleAfterReload.includes('تعريفات')) ok('Refreshing on #/lesson/1 stays on the lesson (refresh-safe routing)'); else fail('Refresh-safe routing failed', titleAfterReload);
  // and progress badge should now show lesson complete
  const completeBadge = await page.$('.qi-step-completion .qi-badge--complete');
  if (completeBadge) ok('Lesson-complete badge shows after reload (progress persisted)'); else fail('Lesson-complete badge missing after reload');

  // 8. Placeholder-rendering code-path check — SYNTHETIC FIXTURE, no real
  // chapter left to use honestly. As of the Tier 10 pass (2026-10-13), all
  // 48 chapters are built (hasLesson:true with a status:"pilot" record), so
  // there is no longer any real unlocked-but-unbuilt chapter anywhere in
  // the live curriculum data to exercise the "unlocked but not yet built"
  // rendering path with. That code path (renderPlaceholder() in
  // lessonEngine.js, plus the .qi-badge--placeholder / .qi-chapter-card--
  // placeholder classes in render.js) is still real, shipped code, though,
  // and still deserves a regression check — so this synthetically patches
  // ONE chapter's in-memory data (both QICurriculum and QILessons are read
  // fresh from window.* on every render call — see js/data.js — so this
  // monkeypatch is honestly exercising the real, unmodified rendering
  // functions, not a fork of them). Chapter 11 was used honestly through
  // the Tier 4 pass, then Chapter 31 through Tier 5, Chapter 39 through
  // Tier 7, Chapter 47 through Tier 8, and Chapter 48 through Tier 9 — all
  // five are now built, so none remain for an honest version of this check.
  // The patched chapter must also be UNLOCKED (independent of hasLesson),
  // or renderLessonPage() takes the locked-notice branch instead of ever
  // reaching the placeholder branch — mark Chapter 48's real prereq chain
  // complete first, same localStorage technique prior tiers used.
  await page.evaluate(() => {
    const key = 'qurra-irab:progress:v1';
    const raw = window.localStorage.getItem(key);
    const state = raw ? JSON.parse(raw) : { version: 1, exercises: {}, lessonsCompleted: {} };
    ['21', '23', '24', '27', '29', '37'].forEach(id => { state.lessonsCompleted[id] = new Date().toISOString(); });
    window.localStorage.setItem(key, JSON.stringify(state));

    const patchedCurriculum = window.QICurriculum.map(c => c.id === 48 ? Object.assign({}, c, { hasLesson: false }) : c);
    window.QICurriculum = patchedCurriculum;
    const patchedLessons = Object.assign({}, window.QILessons);
    delete patchedLessons[48];
    window.QILessons = patchedLessons;
  });
  await page.goto(BASE + '/index.html#/lesson/48', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const placeholderTitle = await page.textContent('.qi-placeholder-title').catch(() => null);
  const hasRule = await page.$('.qi-step-rule');
  const hasExample = await page.$('.qi-step-example');
  if (placeholderTitle && !hasRule && !hasExample) ok('SYNTHETIC: patched chapter shows placeholder notice only, no fabricated rule/example (real content unaffected — see comment above)');
  else fail('Synthetic placeholder rendering check failed', JSON.stringify({ placeholderTitle, hasRule: !!hasRule, hasExample: !!hasExample }));

  // The monkeypatch from the lesson-page check above is still live in this
  // same page context (no reload has happened yet), so the curriculum
  // browser's own placeholder-badge rendering can be checked against the
  // same patched data with a plain hash navigation — no need to re-patch.
  await page.goto(BASE + '/index.html#/curriculum', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const patchedCh48Card = await page.$('.qi-chapter-card:has-text("Chapter 48")');
  const patchedPlaceholderBadge = patchedCh48Card ? await patchedCh48Card.$('.qi-badge--placeholder') : null;
  if (patchedCh48Card && patchedPlaceholderBadge) ok('SYNTHETIC: patched chapter card shows the placeholder badge in the curriculum browser');
  else fail('Synthetic curriculum-browser placeholder badge check failed', 'card=' + !!patchedCh48Card + ' badge=' + !!patchedPlaceholderBadge);

  // A real reload (not just a hash navigation) re-executes every script
  // from scratch, discarding the in-memory monkeypatch above so
  // window.QICurriculum / window.QILessons go back to the real,
  // unmodified 48-chapter data before any further checks run.
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(200);
  const realCh48Card = await page.$('.qi-chapter-card:has-text("Chapter 48")');
  const realPlaceholderBadge = realCh48Card ? await realCh48Card.$('.qi-badge--placeholder') : null;
  if (realCh48Card && !realPlaceholderBadge) ok('Chapter 48 card shows no placeholder badge after reload (real data restored, genuinely built)');
  else fail('Chapter 48 real data not restored after reload', 'card=' + !!realCh48Card + ' badge=' + !!realPlaceholderBadge);

  // 9. Locked chapter check (Chapter 14, prereq [1,10] — 10 not yet
  // complete). Step 8's synthetic fixture above marked Chapters 21, 23,
  // 24, 27, 29 and 37 complete via localStorage (to unlock Chapter 48 for
  // that check) — localStorage survives the page.reload() in step 8, so
  // that state is still in effect here. Chapter 14 stays locked under
  // {1,21,23,24,27,29,37} since Chapter 10 is never marked complete,
  // confirmed by direct inspection of curriculum.js's prereq data.
  const ch14Card = await page.$('.qi-chapter-card:has-text("Chapter 14")');
  const lockedNoticeOnCh14 = ch14Card ? await ch14Card.$('.qi-chapter-card-locked-notice') : null;
  if (ch14Card && lockedNoticeOnCh14) ok('Chapter 14 correctly shown locked (prereq chapter 10 not complete)');
  else fail('Chapter 14 lock state unexpected', 'card=' + !!ch14Card + ' locked=' + !!lockedNoticeOnCh14);

  // 10. Dual-analysis rendering (Chapter 23)
  await page.goto(BASE + '/index.html#/lesson/23', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const dualAnalysisBox = await page.$('.qi-dual-analysis');
  if (dualAnalysisBox) {
    const dualText = await dualAnalysisBox.textContent();
    if (dualText.includes('أصح') || dualText.toLowerCase().includes('more correct') || dualText.length > 10) ok('Chapter 23 renders dual-analysis callout');
    else fail('Chapter 23 dual-analysis box empty/wrong');
  } else fail('Chapter 23 dual-analysis box not found');

  // 11. Language switching + persistence
  await page.goto(BASE + '/index.html#/dashboard', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  await page.click('.qi-lang-btn:has-text("MS")');
  await page.waitForTimeout(150);
  let navText = await page.$$eval('.qi-nav-link', els => els.map(e => e.textContent.trim()));
  if (navText.includes('Kurikulum')) ok('Language switch to MS updates nav labels (" ' + navText.join(', ') + ' ")'); else fail('Language switch to MS failed', JSON.stringify(navText));

  const storedLang = await page.evaluate(() => window.localStorage.getItem('qurra-irab:lang:v1'));
  if (storedLang === 'ms') ok('Language choice persisted to localStorage'); else fail('Language not persisted', storedLang);

  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(200);
  navText = await page.$$eval('.qi-nav-link', els => els.map(e => e.textContent.trim()));
  if (navText.includes('Kurikulum')) ok('MS language choice survives a page reload'); else fail('MS language did not survive reload', JSON.stringify(navText));

  // switch back to EN for cleanliness of further checks
  await page.click('.qi-lang-btn:has-text("EN")');
  await page.waitForTimeout(150);

  // 12. Responsive layout checks
  await page.goto(BASE + '/index.html#/curriculum', { waitUntil: 'load' });
  await page.waitForTimeout(200);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(150);
  let cols = await page.$eval('.qi-chapter-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  if (cols === 1) ok('390px viewport: chapter grid is 1 column'); else fail('390px grid columns != 1', String(cols));

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(150);
  cols = await page.$eval('.qi-chapter-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  if (cols === 2) ok('768px viewport: chapter grid is 2 columns'); else fail('768px grid columns != 2', String(cols));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(150);
  cols = await page.$eval('.qi-chapter-grid', el => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  if (cols === 3) ok('1440px viewport: chapter grid is 3 columns'); else fail('1440px grid columns != 3', String(cols));

  // 13. Progress page + reset
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(BASE + '/index.html#/progress', { waitUntil: 'load' });
  await page.waitForTimeout(200);
  const completedListItem = await page.$('.qi-continue-list .qi-continue-item');
  if (completedListItem) ok('Progress page lists the completed Chapter 1 lesson'); else fail('Progress page missing completed lesson');

  // 14. Console/page error check (run last so earlier steps' own errors are caught too)
  if (consoleErrors.length === 0 && pageErrors.length === 0) ok('No console errors or uncaught page errors during the entire run');
  else fail('Console/page errors detected', JSON.stringify({ consoleErrors, pageErrors }));

  await browser.close();

  console.log('\n=== SUMMARY ===');
  console.log('PASS:', passes.length, ' FAIL:', failures.length);
  if (failures.length) {
    console.log('\nFailures:');
    failures.forEach(f => console.log(' -', f));
    process.exit(1);
  }
  process.exit(0);
})().catch(err => {
  console.error('QA SCRIPT CRASHED:', err);
  process.exit(2);
});
