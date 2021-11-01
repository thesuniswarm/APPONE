// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        product:[],
        productList:[
            {
                "id":1,
                "name":"帅气动漫头像",
                "src":"/images/home.png",
                "price":4099
            },
            {
                "id":2,
                "name":"帅气动漫头像2",
                "src":"/images/home.png",
                "price":3999
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
                "price":999
            },
        ],
        price:0
    },

    //获取产品对象
    getPorduct(){
        var productId = wx.getStorageInfoSync("id");
        var p = this.data.productList;
        for(var i=0;i<p.length;i++){
            if(p[i].id==productId){
                this.setData({
                    product:p[i]
                })
            }
        }
        comsole.log(this.data.product.src);
    },

    //合并付款事件
    checkboxChange(e){
        var priceSum = 0;
        var id = e.currentTarget.id;
        var num = e.detail.value;
        var p = this.data.productList;
        //判断当前选中的元素是否被选中
        if(num !=''){
            for(var i=0;i<p.length;i++){
                if(p[i].id == id){
                    priceSum=this.data.price + p[i].price
                }
            }
        }else{
            for(var i=0;i<p.length;i++){
                if(p[i].id == id){        
                    priceSum=this.data.price - p[i].price
                }
            }
        }
        console.log(priceSum)
        this.setData({
            price:priceSum
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getPorduct();
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