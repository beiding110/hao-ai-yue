// miniprogram/pages/invitation/invitation.js
import PorEngine from '../../js/por-engine'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        R_Z: 0,
        R_X: 0,
        R_Y: 0,

        scene: [
            '../../images/invite/the-bridge/posx.jpg',
            '../../images/invite/the-bridge/negx.jpg',
            '../../images/invite/the-bridge/posy.jpg',
            '../../images/invite/the-bridge/negy.jpg',
            '../../images/invite/the-bridge/posz.jpg',
            '../../images/invite/the-bridge/negz.jpg',
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        new PorEngine({
            callback: event => {
                this.setData({
                    R_Z: 0, //event.R_Z,
                    R_X: event.R_X,
                    R_Y: event.R_Y,
                });
            }
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