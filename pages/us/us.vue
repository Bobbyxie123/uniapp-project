<template>
    <view class="content">
		<form action="">
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">姓名</text>
				<input :class="{ 'active': isActive.name }" class="input" type="text" v-model="MyData.name" placeholder="请输入姓名" />
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">邮箱</text>
				<input :class="{ 'active': isActive.email }" class="input" type="text" v-model="MyData.email" placeholder="请输入邮箱"/>
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">手机号</text>
				<input :class="{ 'active': isActive.mobile }" class="input" type="number" v-model="MyData.mobile" placeholder="请输入手机号码"/>
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">大学</text>
				<input :class="{ 'active': isActive.uni }" class="input" type="text" v-model="MyData.uni" placeholder="请输入大学"/>
			</view>
			
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">微信号</text>
				<input :class="{ 'active': isActive.wechat }" class="input" type="text" v-model="MyData.wechat" placeholder="请输入微信号"/>
			</view>
			
			<!-- here will show the error infomation -->
			<view v-if="error.length">
				<b>Please correct the following error(s):</b>
				<view>
				  <view v-for="errorinfo in error">
					  <text style="color: red;">*</text>
				  {{ errorinfo }}
				  </view>
				</view>
			</view>
			

			
			<button class="add-btn"  style="width: 300rpx;" @click="confirm">提交</button>
		</form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				isActive: {
					name:false,
					email:false,
					mobile: false,
					uni: false,
					wechat: false
					},
				error:[],
				
                MyData: {
                    name: '',
					email:'',
                    mobile: '',
                    uni: '',
                    wechat: ''
                }
            }
        },
        onLoad(option) {},
        methods: {
            // this function is used to submit the form  and validate the form
			
			confirm() {		
				// reset everything
				this.error = [];
				this.isActive.name = false;
				this.isActive.email = false;
				this.isActive.uni = false;
				this.isActive.wechat = false;
				this.isActive.mobile = false
	

				// identify if name,email... is qualified
				if(!this.MyData.name){
					this.error.push('请舔你的名字');
	
					this.isActive.name = true
				}
				
				if(!this.MyData.email){
					this.error.push('请舔你的email')
					this.isActive.email = true
				} else if (!this.validEmail(this.MyData.email)) {
					this.error.push('填正确的email地址');
					this.isActive.email = true
				  }
				
				if(!this.MyData.uni){
					this.error.push('请舔你的大学');
					this.isActive.uni = true
				}
				
				if(!this.MyData.wechat){
					this.error.push('请舔你的wechat')
					this.isActive.wechat = true
				}
				
				if(!this.MyData.mobile){
					this.error.push('请舔你的手机');
					this.isActive.mobile = true
				}else if(!this.validMobile(this.MyData.mobile)){
					this.error.push('填正确的手机号码');
					this.isActive.mobile = true
				}
				
				

				if(!error){			    
					console.log(JSON.stringify(this.MyData))
				}

			
			},
			
			
			// this is function used to valid the email 
			validEmail: function (email) {
			      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			      return re.test(email);
			    },
			
			// this is function used to valid mobile
			validMobile: function(mobile){
				var reg = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
				return reg.test(mobile)
			}
				
				
			
			
			
        }
    }
</script>

<style lang="scss">
	.input{
		border: 1px solid black
	}
	.active{
		border-color: red;
		
	}
    page {
        padding-top: 16rpx;
    }

    .row {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 30rpx;
        height: 110rpx;
        background: #fff;

        .tit {
            flex-shrink: 0;
            width: 120rpx;
            font-size: 30rpx;

        }

        .input {
            flex: 1;
            font-size: 30rpx;

        }

        .icon-shouhuodizhi {
            font-size: 36rpx;

        }
    }

    .add-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 690rpx;
        height: 80rpx;
        margin: 60rpx auto;
        background-color: rgb(28, 42, 134);
        color: #fff;

        border-radius: 10rpx;
        box-shadow: 1px 2px 5px rgba(28, 42, 134, 0.4);
    }
</style>
