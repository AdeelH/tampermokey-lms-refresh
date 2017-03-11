// ==UserScript==
// @name         IBA-LMS session refresher
// @namespace    https://github.com/AdeelH/
// @version      0.3
// @description  Prevent login timeout
// @author       Adeel Hassan
// @match        *://*.iba.edu.pk/portal/*
// @grant        none
// ==/UserScript==

const LMS_REGEX = /^lms2?\.iba\.edu\.pk/i;
const REFRESH_URL = '/direct/session/current.json?_=';
const INTERVAL = 1 * 60 * 1000;

isLMS = url => LMS_REGEX.test(url);
refresh = () => jQuery.ajax({ url: REFRESH_URL + Date.now() });

if (isLMS(location.hostname)) {
	setInterval(refresh, INTERVAL);
}
