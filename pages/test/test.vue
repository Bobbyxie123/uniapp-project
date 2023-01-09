<template>
	<view>

		<button class="cu-btn bg-blue lg shadow" @click="bindGetUserInfo">点击授权登录</button>

	</view>
</template>
<script>
	export default {
        methods: {
            login(authDetail) {
                let _this = this
				uni.login({
					success(res) {
						console.log('获取code成功',res)
                        // 调用自定义服务器方法...
						_this.$api.get_token()
					},
					fail(err) {
						console.log('获取code失败',err)
					}
				})  
            },
            bindGetUserInfo(e) {
                let _this = this
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

