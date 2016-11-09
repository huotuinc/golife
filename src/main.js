import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as routers from './router'
import store from './vuex/store';
import $ from 'jquery'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import infiniteScroll from 'vue-infinite-scroll'
import { timeToNow } from './filters';
import * as errorCodes from './assets/error-type'
import { weixinOAuth } from './apis/common/weixinOAuth'
import { loginByWx } from './apis/user'
import { getTokenByCookie } from './vuex/getters'
import * as utils from './assets/utils'

Vue.filter('timeToNow', timeToNow);

Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.use(Mint);

const router = new VueRouter({
  routes: routers.routes
})

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.meta.requiresAuth == undefined || route.meta.requiresAuth) {
    if (route.query.customerId != undefined && route.query.customerId != 0) {
      if(route.meta.isLogin){
        redirectLogin(route,next,route.query.customerId)
      }else{
        store.dispatch("updateCustomerId", route.query.customerId);
        weixinOAuth(route)
          .then(function (OAutherObject) {
            //TODO 商城授权->微信授权->跳转过来的链接安全性问题还待处理
            store.dispatch("updateFooter", true);
            store.dispatch("updateBackClass", 'ddbg');
            if (route.path !== '/') {
              indexScrollTop = document.body.scrollTop;
            }
            if (OAutherObject.openId != '' && OAutherObject.openId != undefined) {
              loginByWx(route.query.customerId, OAutherObject.openId, OAutherObject.wxNick, OAutherObject.wxHeader)
            }
            if (store.state.mallUrl == '')
              next(errorCodes.redirectErrorByCode(errorCodes.ERROR_CONFIG))
            else
              next()
          })
          .catch(function (error) {//获得商城基本配置异常
            window.console.log(error)
            next(errorCodes.redirectErrorByCode(errorCodes.ERROR_CONFIG))
          })
      }
    } else {
      next(errorCodes.redirectErrorByCode(errorCodes.ERROR_PARAMETER))
    }
  } else {
    next()
  }
  // document.title = route.meta.title || document.title;
});

//TODO 需要添加根据token 来判断登录是否有效的操作
const redirectLogin=(route,next,customerId) =>{
  let token=getTokenByCookie();
  if(token==''||token==undefined){
    let redirectUrl=route.fullPath
    next(utils.redirectLogin(customerId,redirectUrl))
  }else{
    next()
  }
}

// //
// // /**
// //  * 错误拦截
// //  * @param route
// //  * @param next
// //  */
// // const redirectError = function (route, next) {
// //   let url = ''
// //   if (route.query.customerId == undefined || route.query.customerId == 0) {
// //     url = '/error/' + errorCodes.ERROR_PARAMETER
// //     next({path: url})
// //   } else if (store.state.mallUrl == '') {
// //     url = '/error/' + errorCodes.ERROR_CONFIG
// //     next({path: url})
// //   } else {
// //     store.dispatch("updateCustomerId", route.query.customerId);
// //     next();
// //   }
// }


// router.afterEach(route => {
//   if (route.path !== '/') {
//     document.body.scrollTop = 0;
//   } else {
//     Vue.nextTick(() => {
//       document.body.scrollTop = indexScrollTop;
//     });
//   }
// });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

window.$ = $
