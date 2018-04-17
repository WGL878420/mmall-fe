/*
 * @Author: chenjiezi 
 * @Date: 2018-04-17 10:53:42 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-04-17 11:34:24
 */
 
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})