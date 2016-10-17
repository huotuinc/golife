/**
 * Created by Administrator on 2016/10/10.
 */
// export function getLoading (state) {
//   window.console.log("====ceshi ====")
//   return true;
//   // return state.loading;
// }
/**
 * 获得全局加载状态
 * @param state
 */
export const getLoading = state => state.loading

/**
 * 获得是否显示底部导航
 * @param state
 */
export const isFooter = state => state.footer

/**
 * 获得全局的背景颜色
 * @param state
 */
export const getBackClass = state => state.backClass
