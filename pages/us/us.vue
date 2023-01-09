<template>
	<view>
		<u-button type="primary" text="确定" @click="mylogin">click to login</u-button>
	</view>
</template>
<script>
	export default {
		data(){
			return{				
			code:'',
			appid:'wxe51e50c4647d2413',
			secret:'019b113d1ad22fa7677fd1e84a37cffa',
			isFirstWXLogin:true,
			name :  null,
			password :'',
			
			}
		},
		
		methods:{
			mylogin:function(){
				uni.login({
					success(res) {
						if(res.code){
							console.log('success',res.code)
							uni.request({
								url:'https://api.weixin.qq.com/sns/jscode2session?appid=wxe51e50c4647d2413&secret=019b113d1ad22fa7677fd1e84a37cffa&js_code='+ res.code + '&grant_type=authorization_code',
								success: (res)=>{
									console.log('sucess',res)
									uni.setStorage({
										key:'openid',
										data:res.data.openid
									})
									uni.setStorage({
										key:'session-key',
										data:res.data.session_key
									})
									
								}
							})
						}
						else{
							console.log('fail to load')
						}
					}
				})
			}
		}
			
	}
</script>