"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      code: "",
      appid: "wxe51e50c4647d2413",
      secret: "019b113d1ad22fa7677fd1e84a37cffa",
      isFirstWXLogin: true,
      name: null,
      password: ""
    };
  },
  methods: {
    mylogin: function() {
      common_vendor.index.login({
        success(res) {
          if (res.code) {
            console.log("success", res.code);
            common_vendor.index.request({
              url: "https://api.weixin.qq.com/sns/jscode2session?appid=wxe51e50c4647d2413&secret=019b113d1ad22fa7677fd1e84a37cffa&js_code=" + res.code + "&grant_type=authorization_code",
              success: (res2) => {
                console.log("sucess", res2);
                common_vendor.index.setStorage({
                  key: "openid",
                  data: res2.data.openid
                });
                common_vendor.index.setStorage({
                  key: "session-key",
                  data: res2.data.session_key
                });
              }
            });
          } else {
            console.log("fail to load");
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/uview-ui/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.mylogin),
    b: common_vendor.p({
      type: "primary",
      text: "\u786E\u5B9A"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/b6028/Desktop/vue/uniapp/project/compus-project1/pages/us/us.vue"]]);
wx.createPage(MiniProgramPage);
