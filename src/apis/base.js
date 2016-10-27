/*
 * 版权所有:杭州火图科技有限公司
 * 地址:浙江省杭州市滨江区西兴街道阡陌路智慧E谷B幢4楼
 *
 * (c) Copyright Hangzhou Hot Technology Co., Ltd.
 * Floor 4,Block B,Wisdom E Valley,Qianmo Road,Binjiang District
 * 2013-2016. All rights reserved.
 *
 * author:xhl
 */
import "whatwg-fetch"
import store from '../vuex/store'
import { getToken } from '../vuex/getters'
/**
 * API根地址
 */
export const javaApiUri='http://mallsns.51flashmall.com:8091'

// export const javaApiUri = 'http://192.168.1.92:8986'

/**
 * get 请求
 * @param  {String} options.uri   api地址以'/'开头
 * @param  {String} options.query query参数
 * @param token  授权Token
 * @returns {Promise.<T>|*|Promise}
 */
export const get = ({uri, query}) => {
  let _url;
  let _token = getToken(store.state);//获得Token
  if (query) {
    _url = javaApiUri + `${uri}?${query}`;
  } else {
    _url = javaApiUri + `${uri}`;
  }
  return fetch(_url, {
    headers: {
      authentication: _token,
    }
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      return Promise.reject(new Error(res.status));
    })
    .catch(function (error) {
      return Promise.reject(new Error(res.status));
    });
}

/**
 * post请求
 * @param  {String} uri    api相对地址
 * @param  {Object} params 包含post内容的object
 * @param token  授权Token
 * @return {Promise}       Promise
 */
export const post = (uri, params) => {
  let _token = getToken(store.state);//获得Token
  return fetch(javaApiUri + uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authentication: _token,
    },
    body: JSON.stringify(params),
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      }
      return Promise.reject(new Error(res.status));
    });
};

/**
 * 没有数据
 * @type {string}
 */
export const NO_FIND_DATA = '404'
