"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  setup() {
    const cartItems = common_vendor.reactive([
      {
        id: 1,
        name: "商品1",
        price: 10,
        image: "product1.jpg"
      },
      {
        id: 2,
        name: "商品2",
        price: 15,
        image: "product2.jpg"
      },
      {
        id: 3,
        name: "商品3",
        price: 20,
        image: "product3.jpg"
      }
    ]);
    const removeFromCart = (itemId) => {
    };
    const calculateTotal = () => {
    };
    const clearCart = () => {
    };
    const checkout = () => {
    };
    return {
      cartItems,
      removeFromCart,
      calculateTotal,
      clearCart,
      checkout
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.cartItems, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.price),
        c: common_vendor.o(($event) => $setup.removeFromCart(item.id), item.id),
        d: item.id
      };
    }),
    b: common_vendor.t($setup.calculateTotal()),
    c: common_vendor.o((...args) => $setup.clearCart && $setup.clearCart(...args)),
    d: common_vendor.o((...args) => $setup.checkout && $setup.checkout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/pages/tabbar/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
