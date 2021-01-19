/**
 * 登录相关api
 */
import {
  http
} from '@/api/service.js'


export const goLoginApi = (data) => {
  return http.middleware({
	  method: 'POST', // 必须大写
	  url: '/app-api/appLogin',
	  data: data
  })
}

export const getPINApi = (params) => {
  return http.get('/api/user/list', {
    params
  })
}


