import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as routers from './router'
import store from './vuex/store';
import $ from 'jquery'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import infiniteScroll from 'vue-infinite-scroll'
import { timeToNow} from './filters';

Vue.filter('timeToNow', timeToNow);

Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.use(Mint);

const router = new VueRouter({
  routes:routers.routes
})
// router.beforeEach((to, from, next) => {
//   store.dispatch("updateFooter",true);
//   store.dispatch("updateBackClass",'ddbg');
//   next()
// })

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  store.dispatch("updateFooter",true);
  store.dispatch("updateBackClass",'ddbg');
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  // document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

window.$=$
