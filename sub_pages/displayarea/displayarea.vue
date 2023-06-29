<template>
	<view>
		<!-- 		<view class="select-icon">
          <slFilter class = "filter-data" themeColor="themeColor"  menuList="menuList"></slFilter>
		</view> -->
		<view class="my-table">
			<view class="table-header">
				<view v-for="column in menu" :key="column">{{ column }}</view>
			</view>

			<view class="table-body">

				<view class="table-row" v-for="column in menu" :key="column" >
					<view class="table-cell" v-for="row in 10" :key="row">{{column }}</view>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {

		data() {
			return {

				menu: ['日期', '时间', '地点', '摄影师']
				// menu:[]
			}
		},
		onLoad() {

		},
		methods: {

		}

	}
</script>

<style lang="scss">
	.my-table {
		display: flex;
		flex-direction: column;
		border-collapse: collapse;
		margin: 20px;
	}

	.table-header,
	.table-body {
		display: flex;
		// flex-direction: row;
		border: 1px solid #ccc;
	}

	.table-header view,
	.table-body view {
		flex: 1;
		padding: 8px;
	}

	.table-header {
		background-color: #f0f0f0;
	}

	.table-body view {
		flex-direction: column;
	}
	
	.table-cell{
		  flex: 1;
		  padding: 8px;
		  text-align: center;
		  border-right: 1px solid #ccc;
		  border-bottom: 1px solid #ccc;
	}
	// .table-row{
	// 	flex: 1;
	// 	padding: 8px;
	// 	text-align: center;
	// 	border-right: 1px solid #ccc;
	// }
	
</style>