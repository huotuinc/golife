/**
 * Created by Administrator on 2016/10/10.
 */
import { getCookie } from '../assets/cookie/cookie'
import * as cookies from '../assets/cookie/cookie-type'

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

/**
 * 获得全局的Token vuex状态中没有token则查找Cookie中的Token
 * @param state
 */
export const getToken = function (state) {
  if(state.token!=''&&state.token!=undefined){
     return state.token;
  }else{
    return getCookie(cookies.TOKEN)
  }
}

