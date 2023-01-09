"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    login(authDetail) {
      let _this = this;
      common_vendor.index.login({
        success(res) {
          console.log("\u83B7\u53D6code\u6210\u529F", res);
          _this.$api.get_token();
        },
        fail(err) {
          console.log("\u83B7\u53D6code\u5931\u8D25", err);
        }
      });
    },
    bindGetUserInfo(e) {
      common_vendor.index.getUserProfile({
        desc: "weixin",
        success: (res) => {
          console.log(res, "\u6388\u6743\u6210\u529F");
        },
        fail: (err) => {
          console.log(err, "\u5931\u8D25\u6388\u6743");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.bindGetUserInfo && $options.bindGetUserInfo(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/b6028/Desktop/vue/uniapp/project/compus-project1/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
