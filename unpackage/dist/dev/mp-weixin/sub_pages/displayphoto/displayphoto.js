"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cartItemCount: 0
    };
  },
  methods: {
    addToCart() {
      this.cartItemCount++;
    },
    buy() {
      this.cartItemCount = 0;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.addToCart && $options.addToCart(...args)),
    b: common_vendor.o((...args) => $options.buy && $options.buy(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/sub_pages/displayphoto/displayphoto.vue"]]);
wx.createPage(MiniProgramPage);
