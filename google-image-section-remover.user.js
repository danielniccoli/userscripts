// ==UserScript==
// @name        Google Image Section Remover
// @description Removes the image section from the google search results, if it is displayed.
// @author      Daniel Niccoli
// @version     1.0
// @namespace   https://github.com/danielniccoli/userscripts
// @homepageURL https://github.com/danielniccoli/userscripts
// @supportURL  https://github.com/danielniccoli/userscripts/issues
// @downloadURL https://github.com/danielniccoli/userscripts/raw/main/google-image-section-remover.user.js
// @license     https://github.com/danielniccoli/userscripts/blob/main/LICENSE
// @match       https://www.google.com/search
// ==/UserScript==

const targetElement = document.getElementById("iur").closest("#rso > div").remove()
