"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      menu: ["日期", "时间", "地点", "摄影师"]
      // menu:[]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.menu, (column, k0, i0) => {
      return {
        a: common_vendor.t(column),
        b: column
      };
    }),
    b: common_vendor.f($data.menu, (column, k0, i0) => {
      return {
        a: common_vendor.f(10, (row, k1, i1) => {
          return {
            a: row
          };
        }),
        b: common_vendor.t(column),
        c: column
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/GO-MOTO/sub_pages/displayarea/displayarea.vue"]]);
wx.createPage(MiniProgramPage);
