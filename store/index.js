import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
		state: {
			tabbar : [{
						iconPath: "/static/index_ht.png",
						selectedIconPath: "/static/index.png",
						text: '订单',
						pagePath: "/pages/index/index",
						//
					},
					{
						iconPath: "/static/code_ht.png",
						selectedIconPath: "/static/code.png",
						text: '扫码',
						midButton: true,
						pagePath: "pages/scancode/scancode"
					},
					{
						iconPath: "/static/me_ht.png",
						selectedIconPath: "/static/me.png",
						text: '我的',
						pagePath: "pages/me/me",
					}]
			
		},
	    mutations: {},
	    actions: {}
    
})
export default store