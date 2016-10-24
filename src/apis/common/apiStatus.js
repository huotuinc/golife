/*
 * 版权所有:杭州火图科技有限公司
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 * description:API接口返回编码
 * author:xhl
 */

/**
 * 返回成功
 * @type {number} 1
 */
export const SUCCESS=1;

/**
 * 参数错误
 * @type {number} 1001
 */
export const PARAMETER_ERROR=1001;

/**
 * 用户不存在
 * @type {number} 2001
 */
export const ERROR_USER_NOT_FOUND=2001

/**
 * 用户已被冻结，无法进行任何操作，请联系客服
 * @type {number} 2101
 */
export const USER_BE_FREEZE=2101

/**
 * 您已被禁言，无法发表任何言论
 * @type {number} 2102
 */
export const USER_BE_NOTALK=2102

/**
 * 系统请求失败,code 50601
 * @type {number} 50601
 */
export const SYSTEM_BAD_REQUEST_50601=50601

/**
 * 用户登录失败
 * @type {number} 56000
 */
export const ERROR_USER_LOGIN_FAIL=56000

/**
 * 你已经在其他设备登录，需要重新登录
 * @type {number} 56001
 */
export const ERROR_USER_TOKEN_FAIL=56001

/**
 * 手机号码格式不正确
 * @type {number} 53003
 */
export const ERROR_WRONG_MOBILE=53003

/**
 * 手机号已绑定
 * @type {number} 53004
 */
export const ERROR_MOBILE_ALREADY_BINDING=53004

/**
 * 手机号未绑定
 * @type {number} 53005
 */
export const ERROR_MOBILE_NOT_BINDING=53005

/**
 * 验证码发送间隔为90秒
 * @type {number} 53014
 */
export const ERROR_WRONG_VERIFICATION_INTERVAL=53014

/**
 *短信发送通道不稳定，请重新尝试
 * @type {number} 55001
 */
export const ERROR_SEND_MESSAGE_FAIL=55001

/**
 * 验证码错误
 * @type {number} 55002
 */
export const ERROR_WRONG_CODE=55002

/**
 * 文章不存在
 * @type {number} 60001
 */
export const ERROR_SHARE_NOT_FOUND=60001

/**
 * 评论不存在
 * @type {number} 60002
 */
export const ERROR_COMMENT_NOT_FOUND=60002

