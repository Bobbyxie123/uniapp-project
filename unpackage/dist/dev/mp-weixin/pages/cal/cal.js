"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      result: "",
      isActive: {
        account: false,
        fans: false,
        likes: false,
        freq: false
      },
      error: [],
      MyData: {
        account: "",
        fans: "",
        likes: "",
        freq: ""
      }
    };
  },
  onLoad(option) {
  },
  methods: {
    confirm() {
      this.error = [];
      this.isActive.account = false;
      this.isActive.fans = false;
      this.isActive.freq = false;
      this.isActive.likes = false;
      if (!this.MyData.account) {
        this.error.push("\u8BF7\u8214\u4F60\u7684account");
        this.isActive.account = true;
      }
      if (!this.MyData.fans) {
        this.error.push("\u8BF7\u8214\u4F60\u7684fans");
        this.isActive.fans = true;
      }
      if (!this.MyData.freq) {
        this.error.push("\u8BF7\u8214\u4F60\u7684freq");
        this.isActive.freq = true;
      }
      if (!this.MyData.likes) {
        this.error.push("\u8BF7\u8214\u4F60\u7684likes");
        this.isActive.likes = true;
      }
      if (this.error.length == 0) {
        console.log(JSON.stringify(this.MyData));
        this.abc();
      }
    },
    abc: function() {
      var data1;
      data1 = Number(this.MyData.fans) + Number(this.MyData.freq) + Number(this.MyData.likes);
      wx.showModal({
        title: "\u8BA1\u7B97\u7ED3\u679C",
        content: data1 + "",
        showCancel: false,
        confirmText: "\u786E\u5B9A"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isActive.account ? 1 : "",
    b: $data.MyData.account,
    c: common_vendor.o(($event) => $data.MyData.account = $event.detail.value),
    d: $data.isActive.fans ? 1 : "",
    e: $data.MyData.fans,
    f: common_vendor.o(($event) => $data.MyData.fans = $event.detail.value),
    g: $data.isActive.likes ? 1 : "",
    h: $data.MyData.likes,
    i: common_vendor.o(($event) => $data.MyData.likes = $event.detail.value),
    j: $data.isActive.freq ? 1 : "",
    k: $data.MyData.freq,
    l: common_vendor.o(($event) => $data.MyData.freq = $event.detail.value),
    m: $data.error.length
  }, $data.error.length ? {
    n: common_vendor.f($data.error, (errorinfo, k0, i0) => {
      return {
        a: common_vendor.t(errorinfo)
      };
    })
  } : {}, {
    o: common_vendor.o((...args) => $options.confirm && $options.confirm(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/b6028/Desktop/vue/uniapp/project/compus-project1/pages/cal/cal.vue"]]);
wx.createPage(MiniProgramPage);
