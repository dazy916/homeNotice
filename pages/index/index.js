// index.js
const http = require("../../http/http");
// 获取应用实例
const app = getApp();
const { $Toast } = require("../../dist/base/index");

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    canIUseGetUserProfile: false,
    canIUseOpenData:
      wx.canIUse("open-data.type.userAvatarUrl") &&
      wx.canIUse("open-data.type.userNickName"), // 如需尝试获取用户信息可改为false
    imgUrls: [
      {
        imageUrl: "../../images/banner1.jpg",
      },
    ],
    banner: "../../images/banner1.jpg",
    picList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    dutation: 1000,
    mechanism: [
      {
        timeoutPeriod: "乐事薯片",
        timeoutPrice: "3",
      },
      {
        timeoutPeriod: "天友酸奶",
        timeoutPrice: "5",
      },
    ],
    minDate: new Date(2019, 0, 1).getTime(),
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      // console.info(day);

      if (day.type === "selected") {
        day.bottomInfo = "今天";
      } else if (day.type === "disabled") {
        day.bottomInfo = "有临期";
      }

      return day;
    },
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  // 获取轮播数据
  getBanner() {
    http.post("api/open/portal/v1/carousel/getCarouselAllList").then((res) => {
      this.setData({
        imgUrls: res.data,
      });
    });
  },
  goAdd() {
    wx.navigateTo({
      url: "/pages/add/add",
    });
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
    let coupons1 = wx
      .getFileSystemManager()
      .readFileSync("/images/banner1.jpg", "base64");
    let coupons2 = wx
      .getFileSystemManager()
      .readFileSync("/images/banner2.jpg", "base64");
    let arr = [];
    arr.push(
      {
        imageUrl: "data:image/jpg;base64," + coupons1,
      },
      {
        imageUrl: "data:image/jpg;base64," + coupons2,
      }
    );
    this.setData({
      imgUrls: arr,
      banner: "data:image/jpg;base64," + coupons1,
    });
    // this.getBanner()
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
