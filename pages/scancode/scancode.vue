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
				title: '扫码',
				tabbar: ''
			};
		},
		onLoad() {
			this.tabbar = [{
					iconPath: "/static/index_ht.png",
					selectedIconPath: "/static/index.png",
					text: '订单',
					pagePath: "/pages/index/index"
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

<style lang="scss">

</style>
