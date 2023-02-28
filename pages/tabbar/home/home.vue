<template>

	<view class="home_background">


			<swiper class="swiper_back" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
				circular="true">
				<swiper-item @tap="clickSwiper()">
					<view class="swiper_pic" @tap="clickSwiper()">
						
						<text>展示区todo:获取后台表格</text>
						<!-- 					<image :src=""> </image> -->
					</view>
				</swiper-item>


			</swiper>

			<view class="friends_message">

				<view class="friends_user_message">
					<view>
						todo：精选照片
					</view>
				</view>
								</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

			clickSwiper() {
				uni.navigateTo({
					url: '../../../sub_pages/displayarea/displayarea',
				})
			}

      },
	}
</script>

<style lang="scss">
	.home_background {}


	.swiper_back {
		margin-top: 20px;
		margin-left: 15px;
		width: 360px;
		height: 120px;
		border-radius: 10px;
		box-shadow: 0px 0px 5px 0px lightgray;

	}



	.friends_message {
		justify-content: space-around;
		height: 100px;
		border-width: 1px;
		border-radius: 2px;
		box-shadow: 0px 0px 5px 0px lightgray;
		display: flex;
		align-self: center;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 20px;
	}


</style>
