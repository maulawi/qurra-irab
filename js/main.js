/* ==========================================================================
   QURRA I'rab — Bootstrap (main.js)

   The only file index.html needs to point at as the "entry point" in
   spirit, though every module here attaches itself to window and
   index.html loads them all as plain ordered <script> tags (no
   bundler, per the approved static-architecture decision). This file
   just wires the two mount points in index.html to the router.
   ========================================================================== */

(function (global) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var navEl = document.getElementById("qi-app-nav");
    var contentEl = document.getElementById("qi-app-content");
    global.QIRouter.start(navEl, contentEl);
  });

})(window);
