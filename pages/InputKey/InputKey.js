// pages/InputKey/InputKey.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Key_Word: "",
        URL:''

    },

    inq_Key: function (e) {
        this.setData({
            Key_Word: e.detail.value
        })


    },


    inq_cx: function () {
        var URL = this.data.URL
        wx.navigateTo({
            url: URL
            /*+"?co_name" + this.data.Key_Word*/
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
console.log("canshu",options)
this.setData({
    URL:options.runpage
})
console.log("ggg",this.data.URL)
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