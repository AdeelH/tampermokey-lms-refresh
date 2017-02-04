// ==UserScript==
// @name         IBA-LMS session refresher
// @namespace    https://github.com/AdeelH/
// @version      0.2
// @description  Prevent login timeout
// @author       Adeel Hassan
// @match        *://*.iba.edu.pk/portal/*
// @grant        none
// ==/UserScript==

(function() {
	if (!/^lms2?\.iba\.edu\.pk/i.test(location.hostname)) {
		return;
	}
    setInterval(refreshSession, 1 * 60 * 1000);
})();

function refreshSession() {
    return jQuery && jQuery.ajax({
        url: '/direct/session/current.json?_=' + Date.now(),
        dataType: 'json',
    });
}
