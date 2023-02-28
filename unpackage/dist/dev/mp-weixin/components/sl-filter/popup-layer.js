"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "popup-layer",
  props: {
    direction: {
      type: String,
      default: "top"
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    isTransNav: {
      type: Boolean,
      default: false
    },
    navHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ifshow: false,
      translateValue: -100,
      timer: null,
      iftoggle: false
    };
  },
  computed: {
    _translate() {
      if (this.isTransNav) {
        const transformObj = {
          "top": `transform:translateY(${-this.translateValue}%)`,
          "bottom": `transform:translateY(calc(${this.translateValue}% + ${this.navHeight}px))`,
          "left": `transform:translateX(${-this.translateValue}%)`,
          "right": `transform:translateX(${this.translateValue}%)`
        };
        return transformObj[this.direction];
      } else {
        const transformObj = {
          "top": `transform:translateY(${-this.translateValue}%)`,
          "bottom": `transform:translateY(${this.translateValue}%)`,
          "left": `transform:translateX(${-this.translateValue}%)`,
          "right": `transform:translateX(${this.translateValue}%)`
        };
        return transformObj[this.direction];
      }
    },
    _location() {
      const positionValue = {
        "top": "bottom:0px;width:100%;",
        "bottom": "top:0px;width:100%;",
        "left": "right:0px;height:100%;",
        "right": "left:0px;height:100%;"
      };
      return positionValue[this.direction] + this._translate;
    }
  },
  methods: {
    show() {
      this.ifshow = true;
      setTimeout(() => {
        this.translateValue = 0;
      }, 100);
      setTimeout(() => {
        this.iftoggle = true;
      }, 300);
    },
    close() {
      if (this.timer !== null || !this.iftoggle) {
        return;
      }
      this.translateValue = -100 - this.navHeight;
      this.timer = setTimeout(() => {
        this.ifshow = false;
        this.timer = null;
        this.iftoggle = false;
      }, 300);
      this.$emit("close");
    },
    ableClose() {
      if (this.autoClose) {
        this.close();
      }
    },
    stopEvent(event) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.stopEvent && $options.stopEvent(...args)),
    b: common_vendor.s($options._location),
    c: $data.ifshow,
    d: common_vendor.o((...args) => $options.ableClose && $options.ableClose(...args)),
    e: common_vendor.o(() => {
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-QKDSGO4/Desktop/app/GO-MOTTO/components/sl-filter/popup-layer.vue"]]);
wx.createComponent(Component);
