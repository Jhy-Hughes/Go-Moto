"use strict";
const common_vendor = require("../../../common/vendor.js");
const slFilter = () => "../../../components/sl-filter/sl-filter.js";
const _sfc_main = {
  components: {
    slFilter
  },
  data() {
    return {
      themeColor: "#000000",
      filterResult: "",
      menuList: [
        {
          "title": "\u5934\u76D4",
          "isMutiple": false,
          "key": "jobType",
          "detailList": [
            {
              "title": "\u7EA2",
              "value": "#FF0000 "
            },
            {
              "title": "\u7EFF",
              "value": " #008000"
            },
            {
              "title": "\u84DD",
              "value": "#0000FF"
            },
            {
              "title": "\u7C89",
              "value": "#FFC0CB"
            },
            {
              "title": "\u9EA6",
              "value": "#F5DEB3"
            },
            {
              "title": "\u9EC4",
              "value": "#F5DEB3"
            },
            {
              "title": "\u767D",
              "value": " #FFFFFF"
            },
            {
              "title": "\u91D1",
              "value": "#FFD700"
            },
            {
              "title": "\u6F84",
              "value": " #FFA500"
            }
          ]
        },
        {
          "title": "\u4E0A\u8863",
          "key": "salary",
          "isMutiple": false,
          "detailList": [
            {
              "title": "\u7EA2",
              "value": "#FF0000 "
            },
            {
              "title": "\u7EFF",
              "value": " #008000"
            },
            {
              "title": "\u84DD",
              "value": "#0000FF"
            },
            {
              "title": "\u7C89",
              "value": "#FFC0CB"
            },
            {
              "title": "\u9EA6",
              "value": "#F5DEB3"
            },
            {
              "title": "\u9EC4",
              "value": "#F5DEB3"
            },
            {
              "title": "\u767D",
              "value": " #FFFFFF"
            },
            {
              "title": "\u91D1",
              "value": "#FFD700"
            },
            {
              "title": "\u6F84",
              "value": " #FFA500"
            }
          ]
        },
        {
          "title": "\u88E4\u5B50",
          "key": "single",
          "isMutiple": false,
          "detailList": [
            {
              "title": "\u7EA2",
              "value": "#FF0000 "
            },
            {
              "title": "\u7EFF",
              "value": " #008000"
            },
            {
              "title": "\u84DD",
              "value": "#0000FF"
            },
            {
              "title": "\u7C89",
              "value": "#FFC0CB"
            },
            {
              "title": "\u9EA6",
              "value": "#F5DEB3"
            },
            {
              "title": "\u9EC4",
              "value": "#F5DEB3"
            },
            {
              "title": "\u767D",
              "value": " #FFFFFF"
            },
            {
              "title": "\u91D1",
              "value": "#FFD700"
            },
            {
              "title": "\u6F84",
              "value": " #FFA500"
            }
          ]
        },
        {
          "title": "\u8F66\u4F53",
          "key": "sort",
          "isMutiple": false,
          "detailList": [
            {
              "title": "\u7EA2",
              "value": "#FF0000 "
            },
            {
              "title": "\u7EFF",
              "value": " #008000"
            },
            {
              "title": "\u84DD",
              "value": "#0000FF"
            },
            {
              "title": "\u7C89",
              "value": "#FFC0CB"
            },
            {
              "title": "\u9EA6",
              "value": "#F5DEB3"
            },
            {
              "title": "\u9EC4",
              "value": "#F5DEB3"
            },
            {
              "title": "\u767D",
              "value": " #FFFFFF"
            },
            {
              "title": "\u91D1",
              "value": "#FFD700"
            },
            {
              "title": "\u6F84",
              "value": " #FFA500"
            }
          ]
        },
        {
          "title": "\u8F66\u578B",
          "key": "sort",
          "isMutiple": false,
          "detailList": [
            {
              "title": "\u675C\u5361\u8FEA",
              "value": "#FF0000 "
            },
            {
              "title": "\u5DDD\u5D0E",
              "value": " #008000"
            },
            {
              "title": "\u94C3\u6728",
              "value": "#0000FF"
            },
            {
              "title": "\u672C\u7530",
              "value": "#FFC0CB"
            },
            {
              "title": "\u54C8\u96F7",
              "value": "#F5DEB3"
            }
          ]
        }
      ],
      options: [{
        icon: "home",
        text: "\u9996\u9875"
      }, {
        icon: "chat",
        text: "\u5BA2\u670D",
        info: 2,
        infoBackgroundColor: "#DB0F0F"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2,
        infoBackgroundColor: "#DB0F0F"
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#FC8A05",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#DB0F0F",
          color: "#fff"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    result(val) {
      console.log("filter_result:" + JSON.stringify(val));
      this.filterResult = JSON.stringify(val, null, 2);
    },
    onClick(e) {
      common_vendor.index.redirectTo({
        url: "/sub_pages/e.content.icon/${e.content.icon}"
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    }
  }
};
if (!Array) {
  const _component_slFilter = common_vendor.resolveComponent("slFilter");
  const _component_uni_goods_nav = common_vendor.resolveComponent("uni-goods-nav");
  (_component_slFilter + _component_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      themeColor: "themeColor",
      menuList: "menuList"
    }),
    b: common_vendor.o($options.onClick),
    c: common_vendor.o($options.buttonClick),
    d: common_vendor.p({
      fill: false,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/pages/tabbar/photo/photo.vue"]]);
wx.createPage(MiniProgramPage);
