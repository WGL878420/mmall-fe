/*
 * @Author: chenjiezi 
 * @Date: 2018-04-17 10:53:42 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-05-01 15:02:18
 */
 
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
        if(type === 'payment'){
            var orderNumber  = _mm.getUrlParam('orderNumber'),
                $orderNumber = $element.find('.order-number');
            $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
        }
    // 显示对应的提示元素
    $element.show();
})