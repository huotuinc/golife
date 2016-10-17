import * as types from '../vuex/mutation-type'
/**
 * 更新全局加载提示状态方法(loading)
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const updateLoading = ({ commit},loading) => {
    commit(types.UPDATE_LOADING,loading)
}
