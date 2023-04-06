<template>
	<view>
		<view class="camerist_display">
			<!-- <image class="camerist_avator"> </image> -->
		</view>
		<view class="photo_display">
			<view class="photo_message">
			<image>  </image>
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
			
		}
	}
</script>

<style>
	
.camerist_display{
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
.photo_display{
	margin-left: 5px;
	margin-top: 10px;
	width: calc(100% - 10px);
/* 	height: ; */
	border-radius: 5px;
	box-shadow: 0px 0px 2px 2px black;
    
	
}
</style>
