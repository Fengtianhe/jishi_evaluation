// 配置API接口地址
import {Message, Loading} from 'element-ui'

let root = 'http://api.backstage.zrb.dev.kuaiyugroup.com'
// 引用axios
const axios = require('axios')

// 自定义判断元素类型JS

function toType (obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
  for (let key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
 */

function apiAxios (method, url, params, success, failure) {
  let loadingInstance = Loading.service({fullscreen: true, text: '加载中，请等待！'})
  var token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
  if (!token) {
    location.href = '#/login'
  }
  if (params) {
    params = filterNull(params)
  }
  axios({
    'method': method,
    'url': url,
    'data': method === 'POST' || method === 'PUT' ? params : null,
    'params': method === 'GET' || method === 'DELETE' ? params : null,
    'baseURL': root,
    'withCredentials': false,
    'headers': {
      token: token,
      requestTime: new Date().toISOString(),
      version: 1.0,
      platform: 'ZRB_ADMIN'
    }
  }).then(function (res) {
    loadingInstance.close()
    if (res.data.status === "SUCCESS") {
      if (success) {
        success(res.data.data);
        return;
      }
    } else if (failure) {
      failure(res.data);
    } else {
      Message.warning({message: res.data.message, duration: 10000})
      // window.alert('error: ' + JSON.stringify(res.data));
    }
  }).catch(function (error) {
    loadingInstance.close()
    let res = error.response;
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);

      if (url === '/file/upload') {
        Message.error('上传文件过大')
      } else {
        location.href = `#/error`
      }
    }
    console.log(error.config);
    //if (error) {
    //  window.alert('api error, HTTP CODE: ' + res.status);
    //  return;
    //}
  });
}

// 返回在vue模板中的调用接口
export default {
  'get': function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  'post': function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  'put': function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  'delete': function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
