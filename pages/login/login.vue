<template>
	<view class="container">
		<view class="bg bg-color-base margin-b20"></view>
		
		<view class="tab vs-row vs-align-center">
			<image class="tab-bg" src="/static/banner-icon.png" mode=""></image>
			
			<view class="vs-row vs-align-center">
				<view class="vs-column vs-align-center margin-r40" @click="cur = 0 ,smsCode = '' ">
					<text class="font-32 margin-b20" :class="[cur ? 'color-black-3': 'color-base']">密码登录</text>
					<view class="line bg-color-base" v-if="!cur"></view>
				</view>
				<view class="vs-column vs-align-center" @click="cur = 1 ,password = ''">
					<text class="font-32 margin-b20" :class="[cur ? 'color-base': 'color-black-3']">验证码登录</text>
					<view class="line bg-color-base" v-if="cur"></view>
				</view>
			</view>
		</view>
		
		<view class="login margin-b50" v-if="!cur">
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/account.png" mode=""></image>
				<uni-easyinput :inputBorder="false" focus  class="vs-flex-item color-base font-30" type="text" v-model="phone" name="phone" value="" :maxlength="11"  placeholder="请输入您的手机号" placeholder-class="input-placeholder"></uni-easyinput>
			</view>
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/password.png" mode=""></image>
				<uni-easyinput  :inputBorder="false" class="vs-flex-item color-base font-30"  v-model="password" name="password" type="password" value="" placeholder="请输入您的密码" placeholder-class="input-placeholder"></uni-easyinput>
				<span class= "color-base">忘记密码？</span>
			</view>
		</view>
		
		<view class="register margin-b50" v-if="cur">
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/account.png" mode=""></image>
				<uni-easyinput :inputBorder="false"  class="vs-flex-item color-base font-30" type="text" v-model="phone" name="phone" value="":maxlength="11" placeholder="请输入您的手机号" placeholder-class="input-placeholder"></uni-easyinput>
			</view>
			<view class="input vs-row vs-align-center margin-b40">
				<image class="input-icon margin-r20" src="/static/password.png" mode=""></image>
				<uni-easyinput :inputBorder="false"  class="vs-flex-item color-base font-30" type="text" v-model="smsCode"  name="smsCode" value="" placeholder="请输入您的验证码" placeholder-class="input-placeholder"></uni-easyinput>
				<span class= "color-base" @click="getSmsCode">获取验证码</span>
			</view>
		</view>
		
		<view class="button bg-color-base vs-row vs-align-center vs-space-center margin-b20" @click="goLogin">
			<text class="color-white font-34">立即登录</text>
		</view>
		
		<view class="vs-row vs-align-center vs-space-center margin-b100">
			<text class="color-base font-28" @click="go">注册账号</text>
		</view>
		
		<view>
			<u-toast ref="uToast" />
		</view>
		
		<!-- <view class="other">
			<view class="vs-row vs-align-center margin-b40">
				<view class="separator vs-flex-item"></view>
				<text class="color-black-3 font-28">更多登录方式</text>
				<view class="separator vs-flex-item"></view>
			</view>
			
			<view class="other-items vs-row vs-align-center vs-space-around">
				<image class="other-icon" src="/static/wechat.png" mode=""></image>
				<image class="other-icon" src="/static/qq.png" mode=""></image>
				<image class="other-icon" src="/static/apple.png" mode=""></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	//import { goLoginApi, getPINApi } from '@/api/login.js';
	export default {
		data() {
			return {
				cur: 0,
				phone:"",
				password:"",
				smsCode: "",
				
			}
		},
		onLoad() {
			
		},
		methods: {
			//登录
			goLogin(){
				if(typeof this.phone =='undefined'|| this.phone == null || this.phone == ''){
					this.$refs.uToast.show({
						title: '请输入用户名',
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'error', 
						// 如果不需要图标，请设置为false
						// icon: false
						position:'bottom'
					})
					return false;
				}
				if(this.cur == 0){//密码登录
					if(typeof this.password =='undefined'|| this.password == null || this.password == ''){
						this.$refs.uToast.show({
							title: '请输入密码',
							// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
							type: 'error', 
							// 如果不需要图标，请设置为false
							// icon: false
							position:'bottom'
						})
						return false;
					}
				}else{
					if(typeof this.smsCode =='undefined'|| this.smsCode == null || this.smsCode == ''){
						this.$refs.uToast.show({
							title: '请输入验证码',
							// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
							type: 'error', 
							// 如果不需要图标，请设置为false
							// icon: false
							position:'bottom'
						})
						return false;
					}
				}
				
				this.$http.post('/app-api/appLogin',
					{
						phone: this.phone,
						password: this.password,
						smsCode: this.smsCode
					},{
						custom: {auth: false},//anth 是否验证，非必填，默认需要验证
					}
					
				)
				.then(res => {
					console.log(res)
					let data = res.data.data.loginToken
					console.log("登录成功")
					try {
					    uni.setStorageSync('token', data);
						this.$Router.push({ 
							name: 'index',
						})
						
					} catch (e) {
					    this.$refs.uToast.show({
					    	title: '登录失败:'+e,
					    	// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
					    	type: 'error', 
					    	// 如果不需要图标，请设置为false
					    	// icon: false
					    	position:'bottom'
					    })
					}
				
				})
				.catch(err => {
					console.log(err)
					console.log("登录失败")
					let message = err.data.message;
					this.$refs.uToast.show({
						title: message,
						// 如果不传此type参数，默认为default，也可以手动写上 type: 'default'
						type: 'error', 
						// 如果不需要图标，请设置为false
						// icon: false
						position:'bottom'
					})
				});
				
				/* goLoginApi(
					{
						phone: this.phone,
						password: this.password,
						smsCode: this.smsCode
					}
				).then(res => {
					console.log('更新用户信息 post success----期望custom 含有custom: 66');
					console.log(res);
				}).catch(err => {
					console.log('更新用户信息 post fail----');
					console.log(err);
				}); */
				
			},
		
			//获取验证码
			getSmsCode(){
				
			},
			go(){
				
			}
			//注册
		}
	}
</script>

<style lang="scss">
	.container {
		position: relative;
	}
	
	.bg {
		position: relative;
		width: 750rpx;
		height: 450rpx;
	}
	
	
	.tab {
		position: absolute;
		top: 310rpx;
		left: 20rpx;
		right: 20rpx;
		height: 150rpx;
		padding: 0 50rpx;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		
		&-bg {
			position: absolute;
			top: -200rpx;
			right: -50rpx;
			width: 440rpx;
			height: 285rpx;
		}
	}
	
	.line {
		width: 25rpx;
		height: 7rpx;
	}
	
	.login, .register {
		padding: 0 60rpx;
	}
	
	.input {
		width: 630rpx;
		height: 90rpx;
		padding: 0 30rpx;
		background-color: rgba(199, 199, 199, 0.1);
		border-radius: 10rpx;
		&-icon {
			width: 30rpx;
			height: 38rpx;
		}
		
		&-placeholder {
			color: #19be6b;
		}
	}
	
	.button {
		width: 630rpx;
		height: 90rpx;
		margin-left: 60rpx;
		border-radius: 10rpx;
	}
	
	.separator {
		height: 2rpx;
		margin: 0 30rpx;
		background-color: #f5f5f5;
	}
	
	.other {
		&-items {
			padding: 0 200rpx;
		}
		
		&-icon {
			width: 50rpx;
			height: 50rpx;
		}
	}
	
	/****↓登录页面*****/
	// 下边距
	.margin-b5 { margin-bottom: 5rpx; }
	.margin-b10 { margin-bottom: 10rpx; }
	.margin-b15 { margin-bottom: 15rpx; }
	.margin-b20 { margin-bottom: 20rpx; }
	.margin-b25 { margin-bottom: 25rpx; }
	.margin-b30 { margin-bottom: 30rpx; }
	.margin-b40 { margin-bottom: 40rpx; }
	.margin-b60 { margin-bottom: 60rpx; }
	.margin-b80 { margin-bottom: 80rpx; }
	.margin-b100 { margin-bottom: 100rpx; }
	
	// 右边距
	.margin-r5 { margin-right: 5rpx; }
	.margin-r10 { margin-right: 10rpx; }
	.margin-r15 { margin-right: 15rpx; }
	.margin-r20 { margin-right: 20rpx; }
	.margin-r25 { margin-right: 25rpx; }
	.margin-r30 { margin-right: 30rpx; }
	.margin-r40 { margin-right: 40rpx; }
	.margin-r60 { margin-right: 60rpx; }
	
	// 字体大小
	.font-18 {
		font-style: normal;
		font-size: 18rpx;
		font-family: Droid Sans Fallback;
	}
	.font-20 {
		font-style: normal;
		font-size: 20rpx;
		font-family: Droid Sans Fallback;
	}
	.font-22 {
		font-style: normal;
		font-size: 22rpx;
		font-family: Droid Sans Fallback;
	}
	.font-24 {
		font-style: normal;
		font-size: 24rpx;
		font-family: Droid Sans Fallback;
	}
	.font-26 {
		font-style: normal;
		font-size: 26rpx;
		font-family: Droid Sans Fallback;
	}
	.font-28 {
		font-style: normal;
		font-size: 28rpx;
		font-family: Droid Sans Fallback;
	}
	.font-30 {
		font-style: normal;
		font-size: 30rpx;
		font-family: Droid Sans Fallback;
	}
	.font-32 {
		font-style: normal;
		font-size: 32rpx;
		font-family: Droid Sans Fallback;
	}
	.font-34 {
		font-style: normal;
		font-size: 34rpx;
		font-family: Droid Sans Fallback;
	}
	.font-36 {
		font-style: normal;
		font-size: 36rpx;
		font-family: Droid Sans Fallback;
	}
	.font-38 {
		font-style: normal;
		font-size: 38rpx;
		font-family: Droid Sans Fallback;
	}
	.font-40 {
		font-style: normal;
		font-size: 40rpx;
		font-family: Droid Sans Fallback;
	}
	.font-46 {
		font-style: normal;
		font-size: 46rpx;
		font-family: Droid Sans Fallback;
	}
	.font-50 {
		font-style: normal;
		font-size: 50rpx;
		font-family: Droid Sans Fallback;
	}
	.font-60 {
		font-style: normal;
		font-size: 60rpx;
		font-family: Droid Sans Fallback;
	}
	.font-80 {
		font-style: normal;
		font-size: 80rpx;
		font-family: Droid Sans Fallback;
	}
	
	// 字体对齐
	.text-left { text-align: left; }
	.text-center { text-align: center; }
	.text-right { text-align: right; }
	
	// color相关
	.color-white { color: #FFFFFF; }
	.color-red { color: #dc0000; }
	
	// 黑色色阶向下
	.color-black { color: #000; }
	.color-black-3 { color: #333; }
	.color-black-6 { color: #666; }
	.color-black-9 { color: #999; }
	
	// 字体宽度
	.font-weight-400 { font-weight: 400; }
	.font-weight-500 { font-weight: bold; }
	
	// 间隔
	.spacing-20 {
		width: 750rpx;
		height: 20rpx;
		background-color: #f8f8f8;
	}
	
	// 圆角
	.radius-10 { border-radius: 10rpx; }
	.radius-20 { border-radius: 20rpx; }
	.radius-30 { border-radius: 30rpx; }
	.radius-circle { border-radius: 50%; }
	.radius-height { border-radius: 10000px; }
	
	// flex相关
	.vs-flex-item {display: flex; flex: 1; }
	.vs-space-between {display: flex; justify-content: space-between; }
	.vs-space-around {display: flex; justify-content: space-around; }
	.vs-space-center {display: flex; justify-content: center; }
	.vs-space-end {display: flex; justify-content: flex-end; }
	.vs-row {display: flex; flex-direction: row; }
	.vs-column {display: flex; flex-direction: column; }
	.vs-align-end {display: flex; align-items: flex-end; }
	.vs-align-center {display: flex; align-items: center; }
	.vs-align-start {display: flex; align-items: flex-start; }
	.vs-item-hover {display: flex; background-color: rgba(0, 0, 0, 0.05); }
	.vs-btn-hover {display: flex; opacity: 0.8; }
	.color-base { color: #19be6b; }
	.bg-color-base { background-color: #19be6b; }
	
	
	/****↑登录页面*****/
</style>
