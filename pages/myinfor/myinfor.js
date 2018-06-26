var app=getApp();
Page({
  data: {
    username:null,
    password:null,
  },

  onLoad: function (options) {
  
  },
 
  onReady: function (event) {
   
  },
  
  onShow: function (event) {
    
  },
 
  onHide: function () {
    
  },
 
  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },
  
  onReachBottom: function () {
    
  },
 
  onShareAppMessage: function () {
    
  },
  bntClick:function(){
    app.globalData.userinfo={};
    wx.redirectTo({
      url: '../about/about',
    })
  },
  usernameInput:function(){
    this.setData({ username: event.detail.value })
  },
  passwordInput: function () {
    this.setData({password: event.detail.value })
  }

})