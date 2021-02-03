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
			this.tabbar =this.$store.state.tabbar
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
