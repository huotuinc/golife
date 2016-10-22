import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as routers from './router'
import store from './vuex/store';
import $ from 'jquery'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:routers.routes,
  scrollBehavior (to, from, savedPosition) {
    window.console.log('========scroll=======')
    return { x: 0, y: 0 }
  }
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
