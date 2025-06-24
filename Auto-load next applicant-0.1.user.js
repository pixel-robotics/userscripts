// ==UserScript==
// @name         Auto-load next applicant
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load next page and click button automatically
// @match        https://join.com/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", function(e) {
        console.log("key", e.key)
        if (e.ctrlKey && e.key === "y") { // Ctrl+N
            console.log("event")
            const nextBtn = document.getElementById('forwardNavigationButton');
            if (nextBtn) {
                const url = nextBtn.href || nextBtn.getAttribute("data-href");
                if (url) {
                    GM_openInTab(url, { active: false, insert: true }); // open in background
                } else {
                    nextBtn.click(); // fallback: click it directly
                }
            }
        }
    });
})();
