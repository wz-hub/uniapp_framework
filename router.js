// router.js
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routerErrorEach:(error, router)=>{
		if(error.type===2){       
			router.$lockStatus=false;
		}
	},
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to)
	console.log(from)
	if(to.name == 'login'){
		console.log("正常跳转")
		next()
	}else{
		console.log("校验token")
		try {
		    const token = uni.getStorageSync('token');
		    if (typeof token =='undefined'|| token == null || token == '') {
				console.log("登录过期，请重新登录。")
		        next({
		        	name: 'login',
		        	params: {
		        		msg: '重新登录',
		        	},
		        	NAVTYPE: 'replaceAll'
		        });
		    }else{
				console.log("有token 正常跳转")
				next(
				)
			}
		} catch (e) {
			console.log("有问题 重新登录")
			next({
				name: 'login',
				params: {
					msg: '重新登录',
				},
				NAVTYPE: 'replaceAll'
			});
		}
	}
	
	console.log("全局路由前置守卫")
	//next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log("全局路由后置守卫")
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}