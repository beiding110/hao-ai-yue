// pages/painting/painting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgArr: [
            {
                text: '5周年',
                src: '../../images/painting/5.jpg',
            },
            {
                text: '6周年',
                src: '../../images/painting/6.jpg',
            },
            {
                text: '7周年',
                src: '../../images/painting/7.jpg',
            },
            {
                text: '8周年',
                src: '../../images/painting/8.jpg',
            },
            {
                text: '9周年',
                src: '../../images/painting/9.jpg',
            },
            {
                text: '10周年',
                src: '../../images/painting/10.jpg',
            },
        ]
    },

    previewHandler(e) {
        var ds = e.currentTarget.dataset,
            data = ds.data;
        
        // var srcList = this.data.imgArr.map(item => item.src);

        // wx.previewImage({
        //     urls: srcList,
        //     current: data.src,
        // });

        wx.showToast({
          title: data.text,
          icon: 'none',
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