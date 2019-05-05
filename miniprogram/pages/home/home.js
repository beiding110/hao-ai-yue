// miniprogram/pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '',
        full_month: '',
        full_year: '',

        start_time: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            start_time: new Date('2011/03/06')
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var date,
            year = false;

        date = Math.ceil((new Date().getTime() - this.data.start_time.getTime()) / 1000 / 60 / 60 / 24);

        if (new Date().getDate() === this.data.start_time.getDate()) {
            if (new Date().getMonth() === this.data.start_time.getMonth()) {
                year = new Date().getFullYear() - this.data.start_time.getFullYear();
            }
        };
        this.setData({
            date: date,
            full_year: year
        })
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