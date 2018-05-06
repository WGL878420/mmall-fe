/*
 * @Author: chenjiezi 
 * @Date: 2018-04-29 16:44:04 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-04-29 20:36:24
 */
 
'use strict';

var _mm = require('util/mm.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}

// 模块出口
module.exports = _product;