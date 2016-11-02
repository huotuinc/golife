import store from '../../vuex/store'
import { hasOpenId, getMallUrl,getWxOAuherInfo} from '../../vuex/getters'
import { getRootUriByCustomerId } from '../../apis/customerApi'
import { isWeXin } from '../../assets/utils'

/**
 * 根据商户号获得商城地址
 * @param customerId
 * @returns {Promise.<string>}
 */
export const getMallUrlByCustomerId = function (customerId) {
  let mallUrl=getMallUrl(store.state)
  if(mallUrl==undefined||mallUrl==''){
    return getRootUriByCustomerId(customerId)
  }else{
    return Promise.resolve(mallUrl);
  }
}


/**
 * 使用微信授权
 * @param customerId 商户ID
 * @param redirectUrl 授权完成后去的网址
 * @param options 选填，simpleget:只授权，不注册登录；uda：本身的授权失败后，尝试使用火图的授权；scope:0->只获取openid,1->获取更多用户信息
 */
export const oauthByWeixin=function (customerId, redirectUrl, options) {
  var def = { simpleget: 1, uda: 0, scope: 1,retuinfo:1 };
  let redirectUrlEscape=escape(redirectUrl)
  var rootUri=getMallUrl(store.state)
  options = def;
  let oauthUrl = `${rootUri}/OAuth2/WeixinAuthorize.aspx?customerId=${customerId}&redirecturl=${redirectUrlEscape}&simpleget=${options.simpleget}&uda=${options.uda}&scope=${options.scope}&retuinfo=${options.retuinfo}`
  window.location.href =oauthUrl;
}

/**
 * 微信授权并且获得微信相关信息 同时返回微信的相关授权信息
 * @param route 当前跳转的路由
 */
export const weixinOAuth=function (route) {
  let customerId=route.query.customerId
  return getMallUrlByCustomerId(customerId)
    .then(function (data) {
      store.dispatch("updateMallUrl",data);
      if(!hasOpenId(store.state,route)){
        let redirectUri=window.location.href;
        if(isWeXin()){
          oauthByWeixin(customerId,redirectUri)
        }
      }else{
        if(route.query.openid!=undefined){
          let openId=route.query.openid
          let retuinfo=JSON.parse(route.query.retuinfo);
          let wxNick=retuinfo.headimgurl
          let wxHeader=retuinfo.nickname
          store.dispatch("updateOAuther",openId,wxNick,wxHeader);
        }
      }
      return Promise.resolve(getWxOAuherInfo(store.state))
    })
    .catch(function (error) {
      return Promise.reject(error)
    })
}

// /**
//  * 微信授权并且获得微信相关信息
//  * @param route 当前跳转的路由
//  */
// export const weixinOAuth=function (route,callback) {
//   let customerId=route.query.customerId
//   getMallUrlByCustomerId(customerId)
//     .then(function (data) {
//       store.dispatch("updateMallUrl",data);
//       if(!hasOpenId(store.state,route)){
//         let redirectUri=window.location.href;
//         if(isWeXin()){
//           oauthByWeixin(customerId,redirectUri)
//         }
//         callback()
//       }else{
//         if(route.query.openid!=undefined){
//           let openId=route.query.openid
//           let retuinfo=JSON.parse(route.query.retuinfo);
//           let wxNick=retuinfo.headimgurl
//           let wxHeader=retuinfo.nickname
//           store.dispatch("updateOAuther",openId,wxNick,wxHeader);
//         }
//         callback()
//       }
//     })
//     .catch(function (error) {
//       callback()
//     })
//
// }

