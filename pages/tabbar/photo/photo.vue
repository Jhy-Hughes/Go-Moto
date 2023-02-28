<template>
	<view>
		<view class="select-icon">
          <slFilter class = "filter-data" themeColor="themeColor"  menuList="menuList"></slFilter>
		</view>
		<view class="select_time">
			<view>1</view>
			<view>2</view>
			<view>3</view>
			<view>4</view>
			<view>5</view>
		</view>
		<view class="all-photo">
			<view>
<!-- 				<navigator url="../whole_message/whole_message">
					<image src="../../static/user-active.png">
					</image>
				</navigator> -->
			</view>
		</view>
		
		<view class="buy_bottom">
		    <uni-goods-nav :fill="false" :options="options" :buttonGroup="buttonGroup" @click="onClick"
		        @buttonClick="buttonClick" />
		</view>
		
	</view>
</template>

<script>
    import slFilter from '../../../components/sl-filter/sl-filter.vue';
    export default {
        components: {
            slFilter
        },
        data() {
            return {
                themeColor: '#000000',
                filterResult: '',
                menuList: [{
                        'title': '头盔',
						'isMutiple': false,
                        'key': 'jobType',
                        'detailList': [{
                                'title': '红',
                                'value': '#FF0000 '
                            },
                            {
                                'title': '绿',
                                'value': ' #008000'
                            },
                            {
                                'title': '蓝',
                                'value': '#0000FF'
                            },
                            {
                                'title': '粉',
                                'value': '#FFC0CB'
                            },
                            {
                                'title': '麦',
                                'value': '#F5DEB3'
                            },
                            {
                                'title': '黄',
                                'value': '#F5DEB3'
                            },
							{
							    'title': '白',
							    'value': ' #FFFFFF'
							},
							{
							    'title': '金',
							    'value': '#FFD700'
							},
							{
							    'title': '澄',
							    'value': ' #FFA500'
							}
                        ]

                    },
                    {
                        'title': '上衣',
                        'key': 'salary',
						'isMutiple': false,
                        'detailList': [{
                                'title': '红',
                                'value': '#FF0000 '
                            },
                            {
                                'title': '绿',
                                'value': ' #008000'
                            },
                            {
                                'title': '蓝',
                                'value': '#0000FF'
                            },
                            {
                                'title': '粉',
                                'value': '#FFC0CB'
                            },
                            {
                                'title': '麦',
                                'value': '#F5DEB3'
                            },
                            {
                                'title': '黄',
                                'value': '#F5DEB3'
                            },
							{
							    'title': '白',
							    'value': ' #FFFFFF'
							},
							{
							    'title': '金',
							    'value': '#FFD700'
							},
							{
							    'title': '澄',
							    'value': ' #FFA500'
							}
                        ]

                    },
                    {
                        'title': '裤子',
                        'key': 'single',
                        'isMutiple': false,
                        'detailList': [{
                                'title': '红',
                                'value': '#FF0000 '
                            },
                            {
                                'title': '绿',
                                'value': ' #008000'
                            },
                            {
                                'title': '蓝',
                                'value': '#0000FF'
                            },
                            {
                                'title': '粉',
                                'value': '#FFC0CB'
                            },
                            {
                                'title': '麦',
                                'value': '#F5DEB3'
                            },
                            {
                                'title': '黄',
                                'value': '#F5DEB3'
                            },
							{
							    'title': '白',
							    'value': ' #FFFFFF'
							},
							{
							    'title': '金',
							    'value': '#FFD700'
							},
							{
							    'title': '澄',
							    'value': ' #FFA500'
							}
                        ]
                    },
					{
					    'title': '车体',
					    'key': 'sort',
						'isMutiple': false,
					    'detailList': [{
					            'title': '红',
					            'value': '#FF0000 '
					        },
					        {
					            'title': '绿',
					            'value': ' #008000'
					        },
					        {
					            'title': '蓝',
					            'value': '#0000FF'
					        },
					        {
					            'title': '粉',
					            'value': '#FFC0CB'
					        },
					        {
					            'title': '麦',
					            'value': '#F5DEB3'
					        },
					        {
					            'title': '黄',
					            'value': '#F5DEB3'
					        },
							{
							    'title': '白',
							    'value': ' #FFFFFF'
							},
							{
							    'title': '金',
							    'value': '#FFD700'
							},
							{
							    'title': '澄',
							    'value': ' #FFA500'
							}
					    ]
					},
					{
					    'title': '车型',
					    'key': 'sort',
						'isMutiple': false,
					    'detailList': [{
					            'title': '杜卡迪',
					            'value': '#FF0000 '
					        },
					        {
					            'title': '川崎',
					            'value': ' #008000'
					        },
					        {
					            'title': '铃木',
					            'value': '#0000FF'
					        },
					        {
					            'title': '本田',
					            'value': '#FFC0CB'
					        },
					        {
					            'title': '哈雷',
					            'value': '#F5DEB3'
					        }
					    ]
					}
					
                ],
				options: [{
				                icon: 'home',
				                text: '首页'
				            }, {
				                icon: 'chat',
				                text: '客服',
				                info: 2,
				                infoBackgroundColor: '#DB0F0F',
				                // infoColor: "red"
				            }, {
				                icon: 'cart',
				                text: '购物车',
				                info: 2,
				                infoBackgroundColor: '#DB0F0F',
				            }],
				            buttonGroup: [{
				                    text: '加入购物车',
				                    backgroundColor: '#FC8A05',
				                    color: '#fff'
				                },
				                {
				                    text: '立即购买',
				                    backgroundColor: '#DB0F0F',
				                    color: '#fff'
				                }
				            ]
            }
        },
        onLoad() {

        },
        methods: {
            result(val) {
                console.log('filter_result:' + JSON.stringify(val));
                this.filterResult = JSON.stringify(val, null, 2)
            },
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.icon}`,
				// 	icon: 'none'
				// }),
				uni.redirectTo({
					url:'/sub_pages/e.content.icon/${e.content.icon}'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++

			}
        }
    }
</script>

<style lang="scss">
.select-icon{
	display: flex;
	height: 50px;
}
.select_time{
	display: flex;
	flex-direction: row;
	margin: 5px;
}
.all-photo{
	display: flex;
	flex-wrap: wrap;
}
image{
	height: 100px;
	width: 200px;
}
.filter-data{
	display: flex;
	width: 500px;
}
.buy_bottom{
	position: absolute;
	bottom: 0px;
	width: 100%;
}
</style>
