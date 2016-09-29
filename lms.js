// ==UserScript==
// @name         IBA-LMS session refresher
// @namespace    https://github.com/AdeelH/
// @version      0.1
// @description  Prevent login timeout
// @author       Adeel Hassan
// @match        *://*.iba.edu.pk/portal/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	if (!/^lms2?\.iba\.edu\.pk/i.test(location.hostname)) {
		return;
	}
    setTimeout(tamper, 10*1000);
})();

function tamper() {
    window.refreshSession = function() {
		if (typeof(jQuery) === 'undefined')
			return;
        jQuery.ajax({
            url: '/direct/session/current.json?_=' + (new Date()).getTime(),
            dataType: 'json',
            success: function(data){
                setTimeout(window.refreshSession, 1000 * 60 * 1);
            },
            error: function(err) {
                console.log('err', err);
            }
        });
    };
    window.refreshSession();
}