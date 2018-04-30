/*
 * @Author: chenjiezi 
 * @Date: 2018-04-15 16:20:01 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-04-30 13:38:41
 */
 
'use strict';

var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });
    },
    // 添加到购物车
    addToCart : function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/add.do'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    }
}

// 模块出口
module.exports = _cart;