// pages/classtype/classtype.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //分类的变量
        classType:[
            {
                "id":1,
                "name":"高冷"
            },
            {
                "id":2,
                "name":"帅气"
            },
            {
                "id":3,
                "name":"黑暗"
            },
        ],
        //分类后的产品列表
        productList:[],
        //初始数据
        productAll:[
            {
                "id":1,
                "name":"帅气动漫头像",
                "src":"/images/home.png",
                "price":4099,
                "classid":2
            },
            {
                "id":2,
                "name":"帅气动漫头像2",
                "src":"/images/home.png",
                "price":3999,
                "classid":2
            },
            {
                "id":3,
                "name":"帅气动漫头像3",
                "src":"/images/home.png",
                "price":2999,
                "classid":3
            },
            {
                "id":4,
                "name":"帅气动漫头像4",
                "src":"/images/home.png",
                "price":3899,
                "classid":3
            },
            {
                "id":5,
                "name":"帅气动漫头像5",
                "src":"/images/home.png",
                "price":6999,
                "classid":2
            },
            {
                "id":6,
                "name":"帅气动漫头像6",
                "src":"/images/home.png",
                "price":39999,
                "classid":3
            },
            {
                "id":7,
                "name":"帅气动漫头像7",
                "src":"/images/home.png",
                "price":999,
                "classid":2
            },
        ]
    },
    searchTab(e){
        var p = this.data.productAll;
        var id = e.currentTarget.id;
        console.log(e);
        var list = []
        for(var i=0;i<p.length;i++){
            if(p[i].classid == id){
                list.push(p[i])
            }
        }
        this.setData({
            productList:list
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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