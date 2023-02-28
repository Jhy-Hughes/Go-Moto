"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectArr: [],
      result: {},
      menuIndex: 0,
      selectDetailList: [],
      independenceObj: {},
      selectedKey: "",
      cacheSelectedObj: {},
      defaultSelectedTitleObj: {}
    };
  },
  props: {
    themeColor: {
      type: String,
      default() {
        return "#D1372C";
      }
    },
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    independence: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedTitleObj() {
      let obj = {};
      for (let i = 0; i < this.menuList.length; i++) {
        let item = this.menuList[i];
        obj[item.key] = item.title;
      }
      return obj;
    },
    defaultSelectedObj() {
      return this.getSelectedObj();
    },
    selectedObj: {
      get() {
        return this.getSelectedObj();
      },
      set(newObj) {
        return newObj;
      }
    }
  },
  methods: {
    getSelectedObj() {
      let obj = {};
      for (let i = 0; i < this.menuList.length; i++) {
        let item = this.menuList[i];
        if (!this.independence && item.defaultSelectedIndex != null && item.defaultSelectedIndex.toString().length > 0) {
          if (item.isMutiple) {
            obj[item.key] = [];
            item.detailList[0].isSelected = false;
            if (!Array.isArray(item.defaultSelectedIndex)) {
              item.defaultSelectedIndex = [item.defaultSelectedIndex];
            }
            for (let j = 0; j < item.defaultSelectedIndex.length; j++) {
              item.detailList[item.defaultSelectedIndex[j]].isSelected = true;
              obj[item.key].push(item.detailList[item.defaultSelectedIndex[j]].value);
            }
          } else {
            obj[item.key] = item.detailList[item.defaultSelectedIndex].value;
            this.selectedTitleObj[item.key] = item.detailList[item.defaultSelectedIndex].title;
            this.defaultSelectedTitleObj[item.key] = item.detailList[item.defaultSelectedIndex].title;
            item.detailList[0].isSelected = false;
            item.detailList[item.defaultSelectedIndex].isSelected = true;
          }
        } else {
          if (item.isMutiple) {
            obj[item.key] = [];
          } else {
            obj[item.key] = "";
          }
        }
      }
      this.result = obj;
      return obj;
    },
    resetAllSelect(callback) {
      let titles = [];
      for (let i = 0; i < this.menuList.length; i++) {
        this.resetSelected(this.menuList[i].detailList, this.menuList[i].key);
        titles[this.menuList[i].key] = this.menuList[i].title;
      }
      let obj = {
        "result": this.result,
        "titles": titles,
        "isReset": true
      };
      this.$emit("confirm", obj);
      callback(this.result);
    },
    resetSelectToDefault(callback) {
      for (let i = 0; i < this.menuList.length; i++) {
        this.selectDetailList = this.menuList[i].detailList;
        if (this.menuList[i].defaultSelectedIndex) {
          if (Array.isArray(this.menuList[i].defaultSelectedIndex)) {
            for (let j = 0; j < this.menuList[i].defaultSelectedIndex.length; j++) {
              if (this.selectDetailList[this.menuList[i].defaultSelectedIndex[j]].isSelected == false) {
                this.itemTap(this.menuList[i].defaultSelectedIndex[j], this.selectDetailList, this.menuList[i].isMutiple, this.menuList[i].key);
              }
            }
          } else {
            this.itemTap(this.menuList[i].defaultSelectedIndex, this.selectDetailList, this.menuList[i].isMutiple, this.menuList[i].key);
          }
          let unDefaultSelectedIndexArr = this.getUnDefaultSelectedIndex(this.menuList[i]);
          for (let j = 0; j < unDefaultSelectedIndexArr.length; j++) {
            if (this.selectDetailList[unDefaultSelectedIndexArr[j]].isSelected == true) {
              this.itemTap(unDefaultSelectedIndexArr[j], this.selectDetailList, this.menuList[i].isMutiple, this.menuList[i].key);
            }
          }
        }
      }
      this.selectedObj = this.defaultSelectedObj;
      this.result = this.defaultSelectedObj;
      let obj = {
        "result": this.result,
        "titles": this.defaultSelectedTitleObj,
        "isReset": true
      };
      this.$emit("confirm", obj);
      callback(this.result);
    },
    getUnDefaultSelectedIndex(menuListItem) {
      let tempDefault = menuListItem.defaultSelectedIndex;
      if (!Array.isArray(tempDefault)) {
        tempDefault = [tempDefault];
      }
      let all = [];
      for (let i = 0; i < menuListItem.detailList.length; i++) {
        all.push(i);
      }
      var unDefaultSelectedIndex = tempDefault.filter(function(v) {
        return !(all.indexOf(v) > -1);
      }).concat(all.filter(function(v) {
        return !(tempDefault.indexOf(v) > -1);
      }));
      return unDefaultSelectedIndex;
    },
    resetMenuList(val) {
      this.menuList = val;
      this.$emit("update:menuList", val);
    },
    menuTabClick(index) {
      this.menuIndex = index;
      this.selectDetailList = this.menuList[index].detailList;
      this.selectedKey = this.menuList[index].key;
      if (this.independence && !this.menuList[index].isSort) {
        if (JSON.stringify(this.independenceObj) == "{}") {
          this.initIndependenceObj(index);
        } else {
          for (let key in this.independenceObj) {
            if (key != this.selectedKey) {
              this.initIndependenceObj(index);
              this.resetSelected(this.menuList[index].detailList, this.selectedKey);
            }
          }
        }
      }
      if (this.independence && this.menuList[index].isSort) {
        this.independenceObj = {};
      }
      if (this.independence) {
        let idx = this.menuList[index].defaultSelectedIndex;
        if (idx != null && idx.toString().length > 0) {
          if (this.menuList[index].isMutiple) {
            for (let i = 0; i < idx.length; i++) {
              if (this.menuList[index].detailList[idx[i]].isSelected == false) {
                this.itemTap(idx[i], this.menuList[index].detailList, true, this.selectedKey);
              }
            }
          } else {
            if (this.menuList[index].detailList[idx].isSelected == false) {
              this.itemTap(idx, this.menuList[index].detailList, false, this.selectedKey);
            }
          }
        }
      }
    },
    initIndependenceObj(index) {
      this.independenceObj = {};
      if (this.menuList[index].isMutiple) {
        this.independenceObj[this.selectedKey] = [];
      } else {
        this.independenceObj[this.selectedKey] = "";
      }
    },
    itemTap(index, list, isMutiple, key) {
      if (isMutiple == true) {
        list[index].isSelected = !list[index].isSelected;
        if (index == 0) {
          this.resetSelected(list, key);
          if (!this.independence) {
            this.selectedTitleObj[key] = list[index].title;
          }
        } else {
          list[0].isSelected = false;
          if (list[index].isSelected) {
            if (this.independence) {
              this.independenceObj[this.selectedKey].push(list[index].value);
            } else {
              this.selectedObj[key].push(list[index].value);
            }
          } else {
            list[index].isSelected = false;
            if (this.independence) {
              var idx = this.independenceObj[this.selectedKey].indexOf(list[index].value);
              this.independenceObj[this.selectedKey].splice(idx, 1);
            } else {
              var idx = this.selectedObj[key].indexOf(list[index].value);
              this.selectedObj[key].splice(idx, 1);
            }
          }
          if (this.independence) {
            this.result = this.independenceObj;
          } else {
            this.result = this.selectedObj;
          }
        }
      } else {
        if (index == 0) {
          this.resetSelected(list, key);
          if (!this.independence) {
            this.selectedTitleObj[key] = list[index].title;
          }
        } else {
          list[0].isSelected = false;
          if (this.independence) {
            this.independenceObj[this.selectedKey] = list[index].value;
            this.result = this.independenceObj;
          } else {
            this.selectedObj[key] = list[index].value;
            this.result = this.selectedObj;
            this.selectedTitleObj[key] = list[index].title;
          }
          for (let i = 0; i < list.length; i++) {
            if (index == i) {
              list[i].isSelected = true;
            } else {
              list[i].isSelected = false;
            }
          }
        }
      }
    },
    resetSelected(list, key) {
      if (typeof this.result[key] == "object") {
        this.result[key] = [];
        this.selectedTitleObj[key] = list[0].title;
      } else {
        this.result[key] = "";
        this.selectedTitleObj[key] = list[0].title;
      }
      for (let i = 0; i < list.length; i++) {
        if (i == 0) {
          list[i].isSelected = true;
        } else {
          list[i].isSelected = false;
        }
      }
    },
    sortTap(index, list, key) {
      if (this.independence) {
        this.independenceObj[this.selectedKey] = list[index].value;
        this.result = this.independenceObj;
      } else {
        this.selectedObj[key] = list[index].value;
        this.result = this.selectedObj;
        this.selectedTitleObj[key] = list[index].title;
      }
      for (let i = 0; i < list.length; i++) {
        if (index == i) {
          list[i].isSelected = true;
        } else {
          list[i].isSelected = false;
        }
      }
      let obj = {
        "result": this.result,
        "titles": this.selectedTitleObj,
        "isReset": false
      };
      this.$emit("confirm", obj);
    },
    sureClick() {
      let obj = {
        "result": this.result,
        "titles": this.selectedTitleObj,
        "isReset": false
      };
      this.$emit("confirm", obj);
    },
    resetClick(list, key) {
      this.resetSelected(list, key);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.menuIndex == _ctx.index
  }, $data.menuIndex == _ctx.index ? {
    b: common_vendor.f($props.menuList, (item, index, i0) => {
      return common_vendor.e({
        a: item.isSort
      }, item.isSort ? {
        b: common_vendor.f($data.selectDetailList, (detailItem, idx, i1) => {
          return {
            a: common_vendor.t(detailItem.title),
            b: idx,
            c: common_vendor.n(detailItem.isSelected ? "filter-content-list-item-active" : "filter-content-list-item-default"),
            d: detailItem.isSelected ? $props.themeColor : "#666666",
            e: common_vendor.o(($event) => $options.sortTap(idx, $data.selectDetailList, item.key), idx)
          };
        })
      } : common_vendor.e({
        c: item.detailTitle && item.detailTitle.length
      }, item.detailTitle && item.detailTitle.length ? {
        d: common_vendor.t(item.detailTitle)
      } : {}, {
        e: common_vendor.f($data.selectDetailList, (detailItem, idx, i1) => {
          return {
            a: common_vendor.t(detailItem.title),
            b: idx,
            c: detailItem.isSelected ? $props.themeColor : "#FFFFFF",
            d: detailItem.isSelected ? "#FFFFFF" : "#666666",
            e: common_vendor.o(($event) => $options.itemTap(idx, $data.selectDetailList, item.isMutiple, item.key), idx)
          };
        }),
        f: common_vendor.o(($event) => $options.resetClick($data.selectDetailList, item.key), index),
        g: $props.themeColor,
        h: common_vendor.o((...args) => $options.sureClick && $options.sureClick(...args), index)
      }), {
        i: index
      });
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/components/sl-filter/filter-view.vue"]]);
wx.createComponent(Component);
