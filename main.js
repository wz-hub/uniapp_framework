import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import { http } from '@/api/service.js' // 全局挂载引入，配置相关在该index.js文件里修改

import {router,RouterMount} from "./router.js"  //路径换成自己的

Vue.use(router)
Vue.use(uView)


Vue.prototype.$http = http

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif


