// pages/inquire/inquire.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        advimg: ["../../images/IMG_001.jpg", "../../images/IMG_002.jpg", "../../images/IMG_003.jpg", "../../images/IMG_004.jpg"],
        Key_Word: "",
        btlx: ''


    },

    /**
     * 生命周期函数--监听页面加载
     */
    inq_Key: function (e) {
        this.setData({
            Key_Word: e.detail.value
        })


    },


    inq_cx: function () {
        wx.navigateTo({
            url: '../cxbt/cxbt?co_name=' + this.data.Key_Word+'&btlxA='+''
        })
    },
    inq_sbbt_btn: function () {

        this.setData({
            btlx: "社保补贴"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },

    inq_xnjy_btn: function () {
        this.setData({
            btlx: "吸纳就业"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },
    inq_gwbt_btn: function () {
        this.setData({
            btlx: "岗位补贴"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },
    inq_cxcy_btn: function () {
        this.setData({
            btlx: "创新创业"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },
    inq_zjbt_btn: function () {
        this.setData({
            btlx: "租金补贴"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },
    inq_pxbt_btn: function () {
        this.setData({
            btlx: "资质认证"
        })
        wx.navigateTo({
            url: '../sqzzbtn/sqzzbtn?btlx='+this.data.btlx
        })
    },

    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})