"use strict";
const common_vendor = require("../../common/vendor.js");
const popupLayer = () => "./popup-layer.js";
const slFilterView = () => "./filter-view.js";
const _sfc_main = {
  components: {
    popupLayer,
    slFilterView
  },
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    themeColor: {
      type: String,
      default() {
        return "#000000";
      }
    },
    color: {
      type: String,
      default() {
        return "#666666";
      }
    },
    independence: {
      type: Boolean,
      default: false
    },
    isTransNav: {
      type: Boolean,
      default: false
    },
    navHeight: {
      type: Number,
      default: 0
    },
    topFixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuListTemp: {
      get() {
        return this.getMenuListTemp();
      },
      set(newObj) {
        return newObj;
      }
    }
  },
  onReady: function() {
    let arr = [];
    let titleArr = [];
    let r = {};
    for (let i = 0; i < this.menuList.length; i++) {
      arr.push({
        "isActive": false
      });
      r[this.menuList[i].key] = this.menuList[i].title;
      if (this.menuList[i].reflexTitle && this.menuList[i].defaultSelectedIndex > -1) {
        titleArr.push({
          "title": this.menuList[i].detailList[this.menuList[i].defaultSelectedIndex].title,
          "key": this.menuList[i].key
        });
      } else {
        titleArr.push({
          "title": this.menuList[i].title,
          "key": this.menuList[i].key
        });
      }
    }
    this.statusList = arr;
    this.titleList = titleArr;
    this.tempTitleObj = r;
  },
  data() {
    return {
      down: "sl-down",
      up: "sl-up",
      tabHeight: 50,
      statusList: [],
      selectedIndex: "",
      titleList: [],
      tempTitleObj: {}
    };
  },
  methods: {
    getMenuListTemp() {
      let arr = this.menuList;
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        for (let j = 0; j < item.detailList.length; j++) {
          let d_item = item.detailList[j];
          if (j == 0) {
            d_item.isSelected = true;
          } else {
            d_item.isSelected = false;
          }
        }
      }
      return arr;
    },
    resetAllSelect(callback) {
      this.$refs.slFilterView.resetAllSelect(function(e) {
        callback(e);
      });
    },
    resetSelectToDefault(callback) {
      this.$refs.slFilterView.resetSelectToDefault(function(e) {
        callback(e);
      });
    },
    resetMenuList(val) {
      this.menuList = val;
      this.$emit("update:menuList", val);
      this.$forceUpdate();
      this.$refs.slFilterView.resetMenuList(val);
    },
    showMenuClick(index) {
      this.selectedIndex = index;
      if (this.statusList[index].isActive == true) {
        this.$refs.popupRef.close();
        this.statusList[index].isActive = false;
      } else {
        this.menuTabClick(index);
        this.$refs.popupRef.show();
      }
    },
    menuTabClick(index) {
      this.$refs.slFilterView.menuTabClick(index);
      for (let i = 0; i < this.statusList.length; i++) {
        if (index == i) {
          this.statusList[i].isActive = true;
        } else {
          this.statusList[i].isActive = false;
        }
      }
    },
    filterResult(obj) {
      let val = obj.result;
      let titlesObj = obj.titles;
      if (this.independence) {
        if (!this.menuList[this.selectedIndex].isMutiple || this.menuList[this.selectedIndex].isSort) {
          let tempTitle = "";
          for (let i = 0; i < this.menuList[this.selectedIndex].detailList.length; i++) {
            let item = this.menuList[this.selectedIndex].detailList[i];
            if (item.value == val[this.menuList[this.selectedIndex].key]) {
              tempTitle = item.title;
            }
          }
          if (this.menuList[this.selectedIndex].reflexTitle) {
            this.titleList[this.selectedIndex].title = tempTitle;
          }
        }
      } else {
        for (let key in titlesObj) {
          if (!Array.isArray(titlesObj[key])) {
            this.tempTitleObj[key] = titlesObj[key];
          }
        }
        for (let key in this.tempTitleObj) {
          for (let i = 0; i < this.titleList.length; i++) {
            if (this.titleList[i].key == key) {
              this.titleList[i].title = this.tempTitleObj[key];
            }
          }
        }
      }
      this.$refs.popupRef.close();
      if (obj.isReset)
        ;
      else {
        this.$emit("result", val);
      }
    },
    close() {
      for (let i = 0; i < this.statusList.length; i++) {
        this.statusList[i].isActive = false;
      }
    }
  }
};
if (!Array) {
  const _component_sl_filter_view = common_vendor.resolveComponent("sl-filter-view");
  const _component_popup_layer = common_vendor.resolveComponent("popup-layer");
  (_component_sl_filter_view + _component_popup_layer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.color,
    b: common_vendor.f($data.titleList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index,
        c: common_vendor.o(($event) => $options.showMenuClick(index), index)
      };
    }),
    c: $props.color,
    d: common_vendor.n($props.topFixed ? "select-tab-fixed-top" : "select-tab"),
    e: $data.tabHeight + "px",
    f: $data.tabHeight + 1 + "px",
    g: common_vendor.o($options.filterResult),
    h: common_vendor.p({
      independence: $props.independence,
      themeColor: $props.themeColor,
      menuList: $options.menuListTemp
    }),
    i: common_vendor.sr("popupRef", "66ebdb87-0"),
    j: common_vendor.o($options.close),
    k: common_vendor.p({
      direction: "bottom",
      isTransNav: $props.isTransNav,
      navHeight: $props.navHeight,
      tabHeight: $data.tabHeight
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/components/sl-filter/sl-filter.vue"]]);
wx.createComponent(Component);
