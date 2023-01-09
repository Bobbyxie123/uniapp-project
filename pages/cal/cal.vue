<template>
    <view class="content">
		<form action="">
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">社交账号</text>
				<input :class="{ 'active': isActive.account }" class="input" type="text" v-model="MyData.account" placeholder="请输入社交账号" />
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">粉丝数</text>
				<input :class="{ 'active': isActive.fans }" class="input" type="number" v-model="MyData.fans" placeholder="请输入粉丝数"/>
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">点赞数</text>
				<input :class="{ 'active': isActive.likes }" class="input" type="number" v-model="MyData.likes" placeholder="请输入点赞数"/>
			</view>
			<view class="row ">
				<text style="color: red;">*</text>
				<text class="tit">推广频率</text>
				<input :class="{ 'active': isActive.freq }" class="input" type="number" v-model="MyData.freq" placeholder="请输入推广频率"/>
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
			

			
			<button class="add-btn"  style="width: 300rpx;" @click="confirm">计算</button>

		</form>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				result:'',
				isActive: {
					account:false,
					fans:false,
					likes: false,
					freq: false
					},
					
				error:[],
				
                MyData: {
                    account: '',
					fans:'',
                    likes: '',
                    freq: ''

                }
            }
        },
        onLoad(option) {},
        methods: {
            // this function is used to submit the form  and validate the form
			
			confirm() {		
				// reset everything
				this.error = [];
				this.isActive.account = false;
				this.isActive.fans = false;
				this.isActive.freq = false;
				this.isActive.likes = false
	

				// identify if account,email... is qualified
				if(!this.MyData.account){
					this.error.push('请舔你的account');
					this.isActive.account = true
				}
				
				if(!this.MyData.fans){
					this.error.push('请舔你的fans')
					this.isActive.fans = true
				} 
				
				if(!this.MyData.freq){
					this.error.push('请舔你的freq');
					this.isActive.freq = true
				}
				
				if(!this.MyData.likes){
					this.error.push('请舔你的likes');
					this.isActive.likes = true
				}
				
				if(this.error.length==0){			    
					console.log(JSON.stringify(this.MyData))
					this.abc()
				}
			},  
			// the end of the function	
			
			abc:function(){
				var data1
				
				// data1 =  String( Number(this.MyData.fans)+Number(this.MyData.freq)+)
				data1  = Number(this.MyData.fans)+Number(this.MyData.freq)+Number(this.MyData.likes)
				wx.showModal({
					title: '计算结果',
					content: data1+'',
					showCancel: false,
					confirmText: '确定'
				});
			}
        },
		// the end of method 

		
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
