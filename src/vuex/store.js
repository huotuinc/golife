import Vuex from 'vuex';
import Vue from 'vue';
import * as types from '../vuex/mutation-type'
import * as actions from '../vuex/actions'
import * as getters from '../vuex/getters'
import { addCookie } from '../assets/cookie/cookie'
import * as cookies from '../assets/cookie/cookie-type'

Vue.use(Vuex);

const state = {
  loading: true,
  footer:true,
  backClass:'ddbg',
  token:'',
  customerId:0,
  mallUrl:'',
  oauthor:{
    openId:'',
    wxNick:'',
    wxHeader:''
  }
};
const mutations = {
  [types.UPDATE_LOADING](state,loading) {
    setTimeout(function () {
      state.loading=loading
    },2000)
  },
  [types.UPDATE_FOOTER](state,isFooter){
    state.footer=isFooter
  },
  [types.UPDATE_BACKCLASS](state,className){
    state.backClass=className
  },
  [types.UPDATE_TOKEN](state,token){
    state.token=token
    addCookie(cookies.TOKEN,token,cookies.COOKIE_DAYS)
  },
  [types.UPDATE_CUSTOMERID](state,customerId){
    state.customerId=customerId
    addCookie(cookies.CUSTOMERID,customerId,cookies.COOKIE_DAYS)
  },
  [types.UPDATE_WEIXININFO](state,oauthorObj){
    state.oauthor.openId=oauthorObj.openId
    state.oauthor.wxNick=oauthorObj.wxNick
    state.oauthor.wxHeader=oauthorObj.wxHeader
    alert("openId-->"+oauthorObj.openId)
    alert("wxNick-->"+oauthorObj.wxNick)
    alert("wxHeader-->"+oauthorObj.wxHeader)
    addCookie(cookies.OPENID,oauthorObj.openId,cookies.COOKIE_DAYS)
    addCookie(cookies.WXNICK,oauthorObj.wxNick,cookies.COOKIE_DAYS)
    addCookie(cookies.WXHEADER,oauthorObj.wxHeader,cookies.COOKIE_DAYS)
  },
  [types.UPDATE_MALLURL](state,mallUrl){
    state.mallUrl=mallUrl
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
