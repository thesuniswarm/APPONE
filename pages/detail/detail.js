// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productId:"",
        zs:[
            {
            "name":"帅气动漫头像",
            "price":4099
            },
        ],
    },
    //储存数据到本地的同步方法


    addCar(){
        let that = this;
        wx.setStorageSync("id", this.data.productId)
        wx.showModal({
          title:'成功提示',
          content:'产品添加到购物车成功',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            productId:options.id,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})