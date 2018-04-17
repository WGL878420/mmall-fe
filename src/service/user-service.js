// 什么？
// import { resolve } from 'dns';

/*
 * @Author: chenjiezi 
 * @Date: 2018-04-15 15:55:27 
 * @Last Modified by: chenjiezi
 * @Last Modified time: 2018-04-15 16:23:56
 */
 
'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
}

// 模块出口
module.exports = _user;