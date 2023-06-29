"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      checked: false,
      cardChecked: true,
      checkBoxs: [],
      checkBox: [],
      //商品列表
      cardGoodsList: [
        {
          id: "1",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          oprice: 500,
          num: 1,
          thumb: "/static/img/tabbar/qa.png"
        },
        {
          id: "2",
          title: "陕西蜜梨",
          desc: "约600g",
          price: 800,
          oprice: 1e3,
          num: 1,
          thumb: "/static/img/tabbar/qa.png"
        },
        {
          id: "3",
          title: "碧根果",
          desc: "约500g，一袋",
          price: 2e3,
          oprice: 2500,
          num: 2,
          thumb: "/static/img/tabbar/qa.png"
        },
        {
          id: "4",
          title: "夏威夷果",
          desc: "约500g，一袋",
          price: 3e3,
          oprice: 3500,
          num: 1,
          thumb: "/static/img/tabbar/qa.png"
        },
        {
          id: "5",
          title: "开心果",
          desc: "约1000g，一袋",
          price: 2e3,
          oprice: 2500,
          num: 1,
          thumb: "/static/img/tabbar/qa.png"
        },
        {
          id: "6",
          title: "腰果",
          desc: "约1000g，一袋",
          price: 1e3,
          oprice: 1200,
          num: 2,
          thumb: "/static/img/tabbar/qa.png"
        }
      ]
    };
  },
  onLoad() {
    for (var j = 0; j < this.cardGoodsList.length; j++) {
      this.checkBoxs.push(String(j + 1));
    }
    console.log(this.checkBoxs);
    this.getGoodsList();
  },
  onShow() {
  },
  computed: {
    //计算总价
    totalPrice() {
      return this.cardGoodsList.reduce((total, item) => total + (this.checkBox.indexOf(item.id) !== -1 ? item.price * item.num : 0), 0);
    }
  },
  methods: {
    //计算价格
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    //增加数量
    numIncrease(id) {
      console.log("增加数量");
      for (var i = 0; i < this.cardGoodsList.length; i++) {
        if (this.cardGoodsList[i].id == id) {
          this.cardGoodsList[i].num++;
        }
      }
    },
    //减少数量
    numReduce(id) {
      console.log("减少数量");
      for (var i = 0; i < this.cardGoodsList.length; i++) {
        if (this.cardGoodsList[i].id == id && this.cardGoodsList[i].num > 0) {
          this.cardGoodsList[i].num--;
        }
      }
    },
    //删除商品事件
    cardDelete(id) {
      console.log(id);
      this.cardGoodsList.splice(id, 1);
    },
    //提交事件
    onClickButton() {
      console.log("提交购物车");
    },
    //商品单选事件
    onCardChange(event) {
      console.log(event.detail);
      this.checkBox = event.detail;
      if (this.checkBox.length == this.checkBoxs.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    //全选事件
    onChange(event) {
      console.log(event.detail);
      console.log("全选事件");
      this.checked = event.detail;
      if (this.checkBox == "") {
        this.checkBox = this.checkBoxs;
      } else if (this.checkBox.length != this.checkBoxs.length) {
        this.checkBox = this.checkBoxs;
      } else if (this.checkBox.length == this.checkBoxs.length) {
        this.checkBox = [];
      }
    },
    // 获取缓存store中购物车数据
    getGoodsList() {
      var carDatas = [];
      try {
        this.$store.state.car.forEach((item) => {
          carDatas.push(item);
        });
        console.log(carDatas);
        if (carDatas != null) {
          for (var i = 0; i < this.cardGoodsList.length; i++) {
            if (this.cardGoodsList[i].id != carDatas[i].id) {
              this.cardGoodsList.push(carDatas[i]);
              this.checkBoxs.push(String(carDatas[i].id));
            } else {
              return;
            }
          }
          console.log(this.cardGoodsList);
        } else {
          return;
        }
      } catch (e) {
      }
    }
  },
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/pages/tabbar/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
