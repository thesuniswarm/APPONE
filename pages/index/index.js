// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList:[
            {
                "title":"帅气头像",
                "src":"/images/home.png"
            },
            {
                "title":"动漫头像",
                "src":"/images/home.png"
            },
            {
                "title":"帅哥头像",
                "src":"/images/home.png"
            },
            {
                "title":"黑暗头像",
                "src":"/images/home.png"
            },
            {
                "title":"高冷头像",
                "src":"/images/home.png"
            },
            {
                "title":"温和头像",
                "src":"/images/home.png"
            },
            {
                "title":"冷酷头像",
                "src":"/images/home.png"
            },
            {
                "title":"傲娇头像",
                "src":"/images/home.png"
            },
        ],
        productList:[
            {
                "id":1,
                "name":"帅气动漫头像",
                "src":"/images/home.png",
                "price":4099
            },
            {
                "id":2,
                "name":"高冷动漫头像",
                "src":"/images/home.png",
                "price":9099
            },
            {
                "id":3,
                "name":"帅气动漫头像3",
                "src":"/images/home.png",
                "price":2999
            },
            {
                "id":4,
                "name":"帅气动漫头像4",
                "src":"/images/home.png",
                "price":3899
            },
            {
                "id":5,
                "name":"帅气动漫头像5",
                "src":"/images/home.png",
                "price":6999
            },
            {
                "id":6,
                "name":"帅气动漫头像6",
                "src":"/images/home.png",
                "price":39999
            },
            {
                "id":7,
                "name":"帅气动漫头像7",
                "src":"/images/home.png",
                "price":1999
            },
            {
                "id":8,
                "name":"帅气动漫头像8",
                "src":"/images/home.png",
                "price":9998
            },
        ]
    },
    getNavList:function(){
        let that=this;
        wx.request({
          url: '',
          success(res){
              this.setData({
                  navList:res.data
              })
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavList();
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