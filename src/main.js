import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as routers from './router'
import store from './vuex/store';
import $ from 'jquery'
// import weui from '../static/js/jquery-weui'
// import VueAnimatedList from 'vue-animated-list'
Vue.use(VueRouter)
// Vue.use(VueAnimatedList)

// Vue.use(VueResource)
const router = new VueRouter({
  routes:routers.routes
})
router.beforeEach((to, from, next) => {
  store.dispatch("updateFooter",true);
  store.dispatch("updateBackClass",'ddbg');
  next()
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

window.$=$
