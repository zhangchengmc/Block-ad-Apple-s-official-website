// ==UserScript==
// @name         屏蔽苹果官方网站上的<广告>
// @namespace    zhangchengmcbedrock
// @version      1.0
// @description  屏蔽苹果官方网站上的<广告>这二字
// @match        *://*/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // 获取所有符合条件的广告元素
    var adElements = document.querySelectorAll('div.adv-wrapper-text');

    // 遍历广告元素列表，隐藏每个广告元素
    for (var i = 0; i < adElements.length; i++) {
        var adElement = adElements[i];
        adElement.style.display = 'none';
    }
})();