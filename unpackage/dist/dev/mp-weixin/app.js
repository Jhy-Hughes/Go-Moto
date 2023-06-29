"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabbar/home/home.js";
  "./pages/tabbar/photo/photo.js";
  "./pages/tabbar/cart/cart.js";
  "./pages/tabbar/myinfo/myinfo.js";
  "./sub_pages/displayarea/displayarea.js";
  "./sub_pages/displayphoto/displayphoto.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
