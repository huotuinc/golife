import * as types from '../vuex/mutation-type'
/**
 * 更新全局加载提示状态方法(loading)
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const updateLoading = ({ commit},loading) => {
    commit(types.UPDATE_LOADING,loading)
}

/**
 * 修改底部导航状态
 * @param commit
 * @param isFooter
 */
export const updateFooter = ({ commit },isFooter) => {
    commit(types.UPDATE_FOOTER,isFooter)
}

/**
 * 修改背景颜色class
 * @param commit
 * @param className 背景颜色class
 */
export const updateBackClass = ({ commit },className) => {
    commit(types.UPDATE_BACKCLASS,className)
}

/**
 * 修改Token
 * @param commit
 * @param token
 */
export const updateToken = ({ commit },token) => {
  commit(types.UPDATE_TOKEN,token)
}

/**
 * 修改商户号
 * @param commit
 * @param customerId
 */
export const updateCustomerId = ({ commit },customerId) => {
  commit(types.UPDATE_CUSTOMERID,customerId)
}

/**
 * 更新微信基本信息
 * @param commit
 * @param oauthorObj 微信授权获取到的微信个人基本信息
 */
export const updateOAuther = ({ commit },oauthorObj) => {
  alert(JSON.stringify(oauthorObj))
  commit(types.UPDATE_WEIXININFO, oauthorObj)
}

/**
 * 更新商家商城地址
 * @param commit
 * @param mallUrl 商家商城地址
 */
export const updateMallUrl = ({ commit },mallUrl) => {
  commit(types.UPDATE_MALLURL,mallUrl)
}
