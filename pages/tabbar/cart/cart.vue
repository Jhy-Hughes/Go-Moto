<template>
	<view class="catContent">
		<!-- 商品卡片栏 -->
		<!-- <view class="cards">
			<view class="checkedStyle">
				
				<van-swipe-cell :right-width="65" :name="item.id" :key="item.id" v-for="(item,index) in cardGoodsList">
					<view class="chengboxs">
						<van-checkbox-group @change="onCardChange" :value="checkBox">
							<van-checkbox :name="item.id" :key="item.id">
							</van-checkbox>
						</van-checkbox-group>
					</view>
					<van-card :num="item.num" :origin-price="formatPrice(item.oprice)" :price="formatPrice(item.price)"
						:desc="item.desc" :title="item.title" class="goods-card" :thumb="item.thumb">
						<view slot="footer">
							<van-button :key="item" @click="numIncrease(item.id)" size="mini">+</van-button>
							<van-button :key="item" @click="numReduce(item.id)" size="mini">-</van-button>
						</view>
					</van-card>
					<van-button slot="right" @click="cardDelete(index)" type="danger"
						class="delete-button">删除</van-button>
				</van-swipe-cell>
			</view>
			<! 提交订单栏 -->
<!-- 			<view class="submitBar">
				<van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onClickButton" :tip="true">
					<van-checkbox :value="checked" @change="onChange">全选</van-checkbox>
				</van-submit-bar>
			</view>
		</view> -->
	</view>

</template>

<script>
	// import vant from './';
	// components:{
	//     [Divider.name]: Divider,
	// }
	export default {
		data() {

			return {
				checked: false,
				cardChecked: true,
				checkBoxs: [],
				checkBox: [],
				//商品列表
				cardGoodsList: [{
						id: '1',
						title: '进口香蕉',
						desc: '约250g，2根',
						price: 200,
						oprice: 500,
						num: 1,
						thumb: '/static/img/tabbar/qa.png'
					},
					{
						id: '2',
						title: '陕西蜜梨',
						desc: '约600g',
						price: 800,
						oprice: 1000,
						num: 1,
						thumb: '/static/img/tabbar/qa.png'
					},
					{
						id: '3',
						title: '碧根果',
						desc: '约500g，一袋',
						price: 2000,
						oprice: 2500,
						num: 2,
						thumb: '/static/img/tabbar/qa.png'
					},
					{
						id: '4',
						title: '夏威夷果',
						desc: '约500g，一袋',
						price: 3000,
						oprice: 3500,
						num: 1,
						thumb: '/static/img/tabbar/qa.png'
					},
					{
						id: '5',
						title: '开心果',
						desc: '约1000g，一袋',
						price: 2000,
						oprice: 2500,
						num: 1,
						thumb: '/static/img/tabbar/qa.png'
					},
					{
						id: '6',
						title: '腰果',
						desc: '约1000g，一袋',
						price: 1000,
						oprice: 1200,
						num: 2,
						thumb: '/static/img/tabbar/qa.png'
					}
				]
			}
		},
		onLoad() {
			for (var j = 0; j < this.cardGoodsList.length; j++) {
				this.checkBoxs.push(String(j + 1));
			}
			console.log(this.checkBoxs);

			this.getGoodsList()
		},
		onShow() {

		},
		computed: {
			//计算总价
			totalPrice() {
				return this.cardGoodsList.reduce((total, item) => total + (this.checkBox.indexOf(item.id) !== -1 ? item
					.price *
					item.num : 0), 0);
			}
		},
		methods: {
			//计算价格
			formatPrice(price) {
				return (price / 100).toFixed(2);
			},
			//增加数量
			numIncrease(id) {
				console.log("增加数量")

				for (var i = 0; i < this.cardGoodsList.length; i++) {
					if (this.cardGoodsList[i].id == id) {
						this.cardGoodsList[i].num++;
					}
				}
			},
			//减少数量
			numReduce(id) {
				console.log("减少数量")
				for (var i = 0; i < this.cardGoodsList.length; i++) {
					if (this.cardGoodsList[i].id == id && this.cardGoodsList[i].num > 0) {
						this.cardGoodsList[i].num--;
					}
				}
			},
			//删除商品事件
			cardDelete(id) {
				console.log(id)
				this.cardGoodsList.splice(id, 1);
			},
			//提交事件
			onClickButton() {
				console.log("提交购物车")
			},
			//商品单选事件
			onCardChange(event) {
				console.log(event.detail)
				this.checkBox = event.detail
				//单选全部商品列表，即勾选全选框
				if (this.checkBox.length == this.checkBoxs.length) {
					this.checked = true
				} else {
					this.checked = false
				}
			},
			//全选事件
			onChange(event) {
				console.log(event.detail)
				console.log("全选事件")
				this.checked = event.detail
				/*  
					全选/全不选判断
				*/
				if (this.checkBox == '') {
					this.checkBox = this.checkBoxs
				} else if (this.checkBox.length != this.checkBoxs.length) {
					this.checkBox = this.checkBoxs
				} else if (this.checkBox.length == this.checkBoxs.length) {
					this.checkBox = []
				}
			},
			// 获取缓存store中购物车数据
			getGoodsList() {
				var carDatas = [];
				try {
					this.$store.state.car.forEach(item => {
						carDatas.push(item);
					})
					// carDatas = JSON.parse(uni.getStorageSync('car'));
					console.log(carDatas)
					if (carDatas != null) {
						for (var i = 0; i < this.cardGoodsList.length; i++) {
							if (this.cardGoodsList[i].id != carDatas[i].id) {
								this.cardGoodsList.push(carDatas[i])
								this.checkBoxs.push(String(carDatas[i].id))
							} else {
								return
							}
						}
						console.log(this.cardGoodsList)
					} else {
						return
					}
				} catch (e) {}

			},

		},
		mounted() {
			// 进入该页面就要执行的方法；用于加载后台数据
		}
	}
</script>

<style>
.catContent {
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
 
	.checkedStyle {
		width: 100%;
		height: 90%;
		margin-left: 5px;
		margin-bottom: 14%;
	}
 
	.cards {
		width: 100%;
		height: 100%;
	}
 
	.submitBar {
		width: 100%;
		height: 10%;
	}
 
	.chengboxs {
		width: 20px;
		height: 80px;
		margin-top: 55px;
		float: left
	}
 
	.goods-card {
		width: 92%;
		float: right;
	}
 
	.checkedStyle .van-checkbox__label {
		width: 100%;
	}
 
	.checkedStyle .van-checkbox {
		padding-bottom: 5px;
	}
 
	.checkedStyle van-button .van-button--normal {
		width: 100%;
		height: 126px;
	}

</style>