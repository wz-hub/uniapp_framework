<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u-tabbar :list="tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页',
				tabbar: ''
			}
		},
		onLoad() {
			this.tabbar = [{
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
				},
			]
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
