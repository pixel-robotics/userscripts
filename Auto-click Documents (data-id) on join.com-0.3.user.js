// ==UserScript==
// @name         Auto-click Documents (data-id) on join.com
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Automatically clicks the "Documents" button on join.com using data-id
// @match        https://join.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function tryClickDocuments() {
        console.log("try")
        const btn = document.querySelector('[data-id="Dokumente"]');
        console.log("try", btn)
        if (btn) {
            btn.click();
            console.log('[AutoClick] Clicked button with data-id="Dokumente"');
            return true;
        }
        return false;
    }

    // On full load
    window.addEventListener('load', () => {
        console.log("tr333y")
        setTimeout(() => {
            if (!tryClickDocuments()) {
                const observer = new MutationObserver(() => {
                    if (tryClickDocuments()) {
                        observer.disconnect();
                    }
                });
                observer.observe(document.body, { childList: true, subtree: true });
            }
        }, 4000); // small delay to let JS-rendered buttons appear
    });
})();
