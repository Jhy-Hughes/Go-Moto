<template>
	<view class="main_background">
		<view class="tabTit box">

			<view class="flex1" v-for="(item,index) in tabTxt" data-index={{index}} >
				<view v-if="index == 0">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input"><text>{{item}}</text></view>
					</picker>
				</view>
				<view v-else-if="index == 1">
					<picker @change="bindPickerChange" :value="place" :range="place_name">
						<view class="uni-input"> <text>{{item}}</text></view>

					</picker>
				</view>
				<view v-else-if="index == 2">
					<picker @change="bindPickerChange" :value="name" :range="camerist_name">
						<view class="uni-input"> <text>{{item}}</text></view>

					</picker>
				</view>
				<view v-else>
					<view class="uni-input"> <text>{{item}}</text></view>

				</view>


			</view>
		</view>


		<view class="photo_display">
			<view class="photo_message" @tap="clickSwiper()">
				<view> 1 </view>

			</view>
			<view class="photo_message">
				<view> 1 </view>

			</view>
			<view class="photo_message">
				<view> 1 </view>

			</view>

			<view class="photo_message">
				<view> 1 </view>

			</view>
			<view class="photo_message">
				<view> 1 </view>

			</view>


		</view>
	</view>



</template>

<script>
	//todo：
	const Camerist_api = 'https://www'
	// import axios from 'axios'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				tabTxt: ['时间', '地点', '摄影师', '重置'], //分类
				place_id: 0, //价格
				place_name: ['双大陆', '首钢', '百里', '慧忠路隧道'],
				camerist_name: ['1', '2', '3', '4', '5'],
				pickerIndexList: [0, 0, 0], //日期选择器下标
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			clickSwiper() {
				uni.navigateTo({
					url: '../../../sub_pages/displayphoto/displayphoto',
				})
			}


		},

		onLoad() {
			var that = this;


		},

	}
</script>

<style>
	.main_background {
		display: flex;
		flex-direction: column;
	}

	.tabTit {
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: solid 1px #f5f5f5;
		display: flex;
		/* 		position: fixed; */
		top: 0;
		width: 750rpx;
		/* 		z-index: 1; */
		background: #ffffff;
		font-size: 15px;
		text-align: center;
	}

	.flex1 {
		flex: 1;
		text-align: center;
		overflow: hidden;
		display: block;

	}

	.message {
		flex: 1;
		justify-content: space-around;
		border-width: 3px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 0px lightgray;
		/* 	display: flex;
	align-self: center; */
		margin-left: 5px;
		/* 	box-shadow: lightcoral 2px;
	border-radius: 2px;
	border-color: bisque; */
		text-align: center;
	}

	/*弹性盒模型*/
	/* 	.box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	} */
	.photo_display {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		position: relative;
		left: 5px;


	}

	.photo_message {
		width: calc((100% - 25px)/4);
		height: 100px;
		margin-bottom: 2px;
		margin-top: 10px;
		margin-right: 5px;
		border-radius: 10px;
		box-shadow: 0px 0px 5px 0px lightgray;
		text-align: center;
		/* 		margin: auto;
		position: absolute;
		top: 0; left: 0; bottom: 0; right: 0; */

	}
</style>