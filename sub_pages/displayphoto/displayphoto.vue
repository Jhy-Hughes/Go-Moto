<template>
	<view>
		<view class="camerist-display">
			<!-- <image class="camerist_avator"> </image> -->
		</view>
		<view class="photo-display">
			<view class="photo-message">
				<image> </image>
			</view>
		</view>

		<view class="shopping-cart">
			<button class="add-cart" @click="addToCart">加入购物车</button>
			<button class="buy-product" @click="buy">购买</button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartItemCount: 0
			}
		},
		methods: {
			addToCart() {
				this.cartItemCount++;
			},
			buy() {
				// 执行购买逻辑，例如提交订单等操作
				// ...

				// 清空购物车
				this.cartItemCount = 0;
			}

		}
	}
</script>

<style>
	.camerist-display {
		width: calc(100% - 10px);
		margin-left: 5px;
		margin-top: 5px;
		height: 40px;
		border-radius: 5px;
		box-shadow: 0px 0px 0px 2px black;


	}

	/* .camerist_avator{
	width: 30px;
	height: 30px;
	border-radius: 25px;
} */
	.photo-display {
		margin-left: 5px;
		margin-top: 10px;
		width: calc(100% - 10px);
		/* 	height: ; */
		border-radius: 5px;
		box-shadow: 0px 0px 2px 2px black;


	}

	.shopping-cart {
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		/* left: 0; */
		width: 100%;
		/* background-color: #f2f2f2; */
		/* padding-left: 2%; */
		/* padding-right: 10%; */
		padding-bottom: 20px;

	}

	.add-cart {
		width: 45%;
		background-color: chocolate;
		border-radius: 5px;

	}

	.buy-product {
		width: 45%;
		background-color: cadetblue;
		border-radius: 5px;
	}
</style>