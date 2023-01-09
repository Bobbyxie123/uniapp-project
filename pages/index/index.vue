<template>
	<view>

		<button class="cu-btn bg-blue lg shadow" @click="bindGetUserInfo">点击授权登录</button>
		<view class="123">
			1231skdomvodis
		</view>
	</view>
</template>
<script>
	export default {
        methods: {

            bindGetUserInfo(e) {
				uni.getUserProfile({
					desc:'weixin',   
					success:res=>{

						console.log(res,'授权成功');
					},
					fail:err=>{
						console.log(err,'失败授权')
					}
				})
            }
        }        
 
    }
</script>
<style>

</style>

