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

        scene: [],
        
        active: 0,
        navShow: true,
    },

    tapHandler(event) {
        var index;

        if(event) {
            index = Number(event.target.dataset.index);
        } else {
            index = 0;
        };

        this.loadImg(index);

        this.setData({
            active: index
        });
    },

    loadImg(index = 0) {

        const URL = 'http://62.234.50.83:12100/images/scene-';
        const NAME_THEME = [
            {
                name: 'gray',
                arr: ['posz', 'negz', 'bg', 'bg', 'posx', 'negx'],
            },
            {
                name: 'orange',
                arr: ['posz', 'negz', 'posy', 'negy', 'posx', 'negx'],
            },
            {
                name: 'yellow',
                arr: ['posx', 'negx', 'posy', 'posy', 'posz', 'negz'],
            },
            {
                name: 'cool',
                arr: ['posz', 'negz', 'posy', 'posy', 'posx', 'negx'],
            },
        ];

        // var index = new Date().getTime() % 3;
        var usingTheme = NAME_THEME[index];

        var nameArr = usingTheme.arr.reduce((arr, item) => {
            arr.push(`${URL}${usingTheme.name}/${item}.jpg`);
            return arr;
        }, []);

        this.setData({
            scene: nameArr
        });
    },

    imgErrorHandler() {
        this.setData({
            scene: [
                '../../images/invite/the-bridge/posx.jpg',
                '../../images/invite/the-bridge/negx.jpg',
                '../../images/invite/the-bridge/posy.jpg',
                '../../images/invite/the-bridge/negy.jpg',
                '../../images/invite/the-bridge/posz.jpg',
                '../../images/invite/the-bridge/negz.jpg',
            ],
            navShow: false
        });
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
        });

        this.tapHandler()
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