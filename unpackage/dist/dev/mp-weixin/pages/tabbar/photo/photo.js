"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const currentDate = this.getDate({
      format: true
    });
    return {
      date: currentDate,
      tabTxt: ["时间", "地点", "摄影师", "重置"],
      //分类
      place_id: 0,
      //价格
      place_name: ["双大陆", "首钢", "百里", "慧忠路隧道"],
      camerist_name: ["1", "2", "3", "4", "5"],
      pickerIndexList: [0, 0, 0]
      //日期选择器下标
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  methods: {
    bindPickerChange: function(e) {
      console.log("picker发送选择改变，携带值为", e.detail.value);
      this.index = e.detail.value;
    },
    bindDateChange: function(e) {
      this.date = e.detail.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    clickSwiper() {
      common_vendor.index.navigateTo({
        url: "../../../sub_pages/displayphoto/displayphoto"
      });
    }
  },
  onLoad() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabTxt, (item, index, i0) => {
      return common_vendor.e({
        a: index == 0
      }, index == 0 ? {
        b: common_vendor.t(item),
        c: $data.date,
        d: $options.startDate,
        e: $options.endDate,
        f: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args))
      } : index == 1 ? {
        h: common_vendor.t(item),
        i: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
        j: _ctx.place,
        k: $data.place_name
      } : index == 2 ? {
        m: common_vendor.t(item),
        n: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
        o: _ctx.name,
        p: $data.camerist_name
      } : {
        q: common_vendor.t(item)
      }, {
        g: index == 1,
        l: index == 2
      });
    }),
    b: common_vendor.o(($event) => $options.clickSwiper())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/pages/tabbar/photo/photo.vue"]]);
wx.createPage(MiniProgramPage);
