// miniprogram/pages/memorandum/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        objData: [
            {
                title: '洗漱清洁',
                children: [
                    {label: '牙膏', checked: false}, 
                    {label: '牙刷', checked: false}, 
                    {label: '洗面奶', checked: false}, 
                    {label: '露娜', checked: false}, 
                    {label: '洗发水', checked: false}, 
                    {label: '护发素', checked: false}, 
                    {label: '沐浴露', checked: false}, 
                    {label: '擦脸巾', checked: false}, 
                    {label: '压缩浴巾', checked: false}, 
                    {label: '压缩毛巾', checked: false}, 
                    {label: '梳子', checked: false}, 
                    { label: '发绳', checked: false}
                ]
            }, {
                title: '护肤品',
                children: [
                    { label: '化妆棉', checked: false },
                    { label: '爽肤水', checked: false },
                    { label: '乳液', checked: false },
                    { label: '眼霜', checked: false },
                    { label: '精华', checked: false },
                    { label: '面霜', checked: false },
                    { label: '防晒', checked: false },
                    { label: '狮王祛痘膏', checked: false },
                    { label: '面膜', checked: false },
                    { label: '护发精油', checked: false },
                    { label: '护手霜', checked: false },
                    { label: '芦荟胶', checked: false }
                ]
            }, {
                title: '化妆品',
                children: [
                    {label: 'BB霜', checked: false}, 
                    {label: '粉饼', checked: false}, 
                    {label: '眉笔', checked: false}, 
                    {label: '眼影', checked: false}, 
                    {label: '睫毛膏', checked: false}, 
                    {label: '睫毛夹', checked: false}, 
                    {label: '润唇膏', checked: false}, 
                    {label: '口红', checked: false}, 
                    {label: '卸妆水', checked: false}
                ]
            }, {
                title: '其他',
                children: [
                    { label: '洗衣液', checked: false },
                    { label: '纸巾', checked: false },
                    { label: '湿巾', checked: false },
                    { label: '马桶坐垫', checked: false },
                    { label: '充电宝', checked: false },
                    { label: '充电器', checked: false },
                    { label: '耳机', checked: false },
                    { label: '手表', checked: false },
                    { label: '身份证', checked: false },
                    { label: '银行卡', checked: false },
                    { label: '卫生巾', checked: false },
                    { label: '睡袋', checked: false },
                    { label: '雨伞', checked: false },
                    { label: '钥匙', checked: false }
                ]
            }, {
                title: '换洗衣物',
                children: [
                    { label: '内衣', checked: false },
                    { label: '内裤', checked: false },
                    { label: '袜子', checked: false },
                    { label: '换洗衣服', checked: false },
                    { label: '睡衣', checked: false }
                ]
            }
        ]
    },

    checkboxChange(e) {
        // console.log(e)
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