<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// try {
			// 	console.log("自动登录")
			//     const token = uni.getStorageSync('token');
			//     if (typeof token =='undefined'|| token == null || token == '') {
			// 		console.log("kkk")
			//         /* this.$Router.push({
			//         	name: 'login',
			//         }) */
					
			// 		uni.navigateTo({
			// 		    url: 'pages/login/login'
			// 		});
			//     }else{
			// 		console.log("yyyy")
			// 		this.$Router.push({
			// 			name: 'index',
			// 		})
			// 	}
			// } catch (e) {
			//     this.$Router.push({
			//     	name: 'login',
			//     })
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>