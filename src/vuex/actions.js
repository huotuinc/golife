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
