/**
 * 登录相关api
 */
import {
  http
} from '@/api/service.js'


export const goLoginApi = (data) => {
  return http.middleware({
	  method: 'POST', // 必须大写
	  url: '/rest/login',
	  data: data
  })
}

export const getPINApi = (params) => {
  return http.get('/rest/login', {
    params
  })
}


