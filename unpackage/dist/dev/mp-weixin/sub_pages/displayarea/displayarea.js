"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_slFilter = common_vendor.resolveComponent("slFilter");
  _component_slFilter();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      themeColor: "themeColor",
      menuList: "menuList"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/sub_pages/displayarea/displayarea.vue"]]);
wx.createPage(MiniProgramPage);
