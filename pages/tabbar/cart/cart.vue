<template>
  <view class="shopping-cart">
    <h2>购物车</h2>

    <view class="cart-items">
      <view class="cart-item" v-for="item in cartItems" :key="item.id">
        <view class="item-image">
          <!-- <img :src="item.image" :alt="item.name"> -->
        </view>
        <view class="item-details">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}</p>
        </view>
        <view class="item-actions">
          <button @click="removeFromCart(item.id)">删除</button>
        </view>
      </view>
    </view>

    <view class="cart-total">
      <p>总计: {{ calculateTotal() }}</p>
    </view>

<view class="bottom-button">
<view class="input-button">
	<input class="check-all" type="checkbox" :checked="true"></view>
    <view class="cart-buttons">
	 
	  <!-- <button @click="clickall">全选</button> -->
      <button @click="clearCart">清空购物车</button>
      <button @click="checkout">结算</button>
    </view>
	</view>
  </view>
</template>

<script>
	import { reactive } from 'vue';
	// import vant from './';
	// components:{
	//     [viewider.name]: viewider,
	// }
	export default {
		 setup() {
		    const cartItems = reactive([
		      { id: 1, name: '商品1', price: 10, image: 'product1.jpg' },
		      { id: 2, name: '商品2', price: 15, image: 'product2.jpg' },
		      { id: 3, name: '商品3', price: 20, image: 'product3.jpg' }
		    ]);
		
		    const removeFromCart = (itemId) => {
		      // 从购物车中移除商品
		      // ...
		    };
		
		    const calculateTotal = () => {
		      // 计算购物车总金额
		      // ...
		    };
		
		    const clearCart = () => {
		      // 清空购物车
		      // ...
		    };
		
		    const checkout = () => {
		      // 执行结算操作
		      // ...
		    };
		
		    return {
		      cartItems,
		      removeFromCart,
		      calculateTotal,
		      clearCart,
		      checkout
		    };}
			};
			
</script>

<style>
.shopping-cart {
  padding: 20px;
}

.cart-item {
  display: flex;
  margin-bottom: 20px;
}

.item-image img {
  width: 100px;
  height: auto;
}

.item-details {
  flex-grow: 1;
  margin-left: 10px;
}

.cart-total {
  margin-top: 20px;
  text-align: right;
}
.bottom-button{
	margin-top: 20px;
	position: absolute;
	bottom: 10px;
	display: flex;
	width: 100%;
}
.input-button{
	width: 5%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
}

.cart-buttons {
  
  display: flex;
  width: 95%;
  justify-content: space-around;
}

.cart-buttons button {
  /* margin-left: 10px; */
  width: 40%;
}
.input-button input{
	border: 2px solid #ccc;
	border-color: antiquewhite;
	background-color: beige;
	width: 20px;
	height: 20px;
}
</style>