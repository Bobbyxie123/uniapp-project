"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isActive: {
        name: false,
        email: false,
        mobile: false,
        uni: false,
        wechat: false
      },
      error: [],
      MyData: {
        name: "",
        email: "",
        mobile: "",
        uni: "",
        wechat: ""
      }
    };
  },
  onLoad(option) {
  },
  methods: {
    confirm() {
      this.error = [];
      this.isActive.name = false;
      this.isActive.email = false;
      this.isActive.uni = false;
      this.isActive.wechat = false;
      this.isActive.mobile = false;
      if (!this.MyData.name) {
        this.error.push("\u8BF7\u8214\u4F60\u7684\u540D\u5B57");
        this.isActive.name = true;
      }
      if (!this.MyData.email) {
        this.error.push("\u8BF7\u8214\u4F60\u7684email");
        this.isActive.email = true;
      } else if (!this.validEmail(this.MyData.email)) {
        this.error.push("\u586B\u6B63\u786E\u7684email\u5730\u5740");
        this.isActive.email = true;
      }
      if (!this.MyData.uni) {
        this.error.push("\u8BF7\u8214\u4F60\u7684\u5927\u5B66");
        this.isActive.uni = true;
      }
      if (!this.MyData.wechat) {
        this.error.push("\u8BF7\u8214\u4F60\u7684wechat");
        this.isActive.wechat = true;
      }
      if (!this.MyData.mobile) {
        this.error.push("\u8BF7\u8214\u4F60\u7684\u624B\u673A");
        this.isActive.mobile = true;
      } else if (!this.validMobile(this.MyData.mobile)) {
        this.error.push("\u586B\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801");
        this.isActive.mobile = true;
      }
      if (this.error.length == 0) {
        console.log(JSON.stringify(this.MyData));
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validMobile: function(mobile) {
      var reg = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
      return reg.test(mobile);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isActive.name ? 1 : "",
    b: $data.MyData.name,
    c: common_vendor.o(($event) => $data.MyData.name = $event.detail.value),
    d: $data.isActive.email ? 1 : "",
    e: $data.MyData.email,
    f: common_vendor.o(($event) => $data.MyData.email = $event.detail.value),
    g: $data.isActive.mobile ? 1 : "",
    h: $data.MyData.mobile,
    i: common_vendor.o(($event) => $data.MyData.mobile = $event.detail.value),
    j: $data.isActive.uni ? 1 : "",
    k: $data.MyData.uni,
    l: common_vendor.o(($event) => $data.MyData.uni = $event.detail.value),
    m: $data.isActive.wechat ? 1 : "",
    n: $data.MyData.wechat,
    o: common_vendor.o(($event) => $data.MyData.wechat = $event.detail.value),
    p: $data.error.length
  }, $data.error.length ? {
    q: common_vendor.f($data.error, (errorinfo, k0, i0) => {
      return {
        a: common_vendor.t(errorinfo)
      };
    })
  } : {}, {
    r: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/b6028/Desktop/vue/uniapp/project/compus-project1/pages/reg/reg.vue"]]);
wx.createPage(MiniProgramPage);
