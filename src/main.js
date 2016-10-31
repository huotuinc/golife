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
import * as errorCodes from './assets/error-type'
import { weixinOAuth } from './apis/common/weixinOAuth'

Vue.filter('timeToNow', timeToNow);

Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.use(Mint);

const router = new VueRouter({
  routes:routers.routes
})

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  weixinOAuth(route,function () {
    //TODO 商城授权->微信授权->跳转过来的链接安全性问题还待处理
    store.dispatch("updateFooter",true);
    store.dispatch("updateBackClass",'ddbg');
    if (route.path !== '/') {
      indexScrollTop = document.body.scrollTop;
    }

    console.log("requiresAuth="+ route.meta.requiresAuth+" , customerId="+route.query.customerId);

    if(route.meta.requiresAuth==undefined||route.meta.requiresAuth){
      if(route.query.customerId==undefined||route.query.customerId==0){
        let url= '/error/'+errorCodes.ERROR_PARAMETER
        next({ path: url })
      }else{
        store.dispatch("updateCustomerId",route.query.customerId);
        next();
      }
    }else{
      next();
    }
  })//微信授权
  // document.title = route.meta.title || document.title;
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
