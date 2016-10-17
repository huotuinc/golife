import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import * as routers from './router'
import store from './vuex/store';
Vue.use(VueRouter)
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
