import Vuex from 'vuex';
import Vue from 'vue';
import * as types from '../vuex/mutation-type'
import * as actions from '../vuex/actions'
import * as getters from '../vuex/getters'

Vue.use(Vuex);

const state = {
  loading: true,
  footer:true,
  backClass:'ddbg'
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
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
