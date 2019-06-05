// miniprogram/pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '',//天数
        full_month: '',//月数
        full_year: '',//年数

        next_month: '-',//距下个月
        next_year: '-',//距下个年

        start_time: '',//计算起始日期，Date对象

        from_time: '',//计算起始日期，String格式
        to_time: ''//当前日期，String格式
    },

    //计算纪念日
    calcFullDate: function() {
        var date,
            month = false,
            year = false;

        var today = new Date(),
            today_s_date = today.getDate(), //今天的日期
            today_s_month = today.getMonth(), //今天的月期
            today_s_year = today.getFullYear(), //今天的年期
            start_s_date = this.data.start_time.getDate(), //起始日期
            start_s_month = this.data.start_time.getMonth(); //起始月份

        date = Math.ceil((new Date().getTime() - this.data.start_time.getTime()) / 1000 / 60 / 60 / 24);

        if (today_s_date === start_s_date) {
            if (today_s_month === start_s_month) {
                //计算周年
                year = today_s_year - this.data.start_time.getFullYear();
            };

            //计算周月
            month = today_s_month + ((today_s_year - this.data.start_time.getFullYear()) * 12) - start_s_month;
        };

        this.setData({
            date: date,
            full_year: year,
            full_month: month
        });
    },
    //纪念日则触发震动
    shakeHandler: function() {
        if (!!this.data.full_month) {
            if (!!this.data.full_year) {
                wx.vibrateLong();
            } else {
                wx.vibrateShort();
            };
        }
    },
    //计算倒计时
    calcNext: function() {
        var today = new Date(),
            next_month,
            next_year;

        var the_next_year = new Date(), //下个周年日期，xxxx-03-06
            the_next_month = new Date(); //下个周月日期，xxxx-xx-06

        var today_s_date = today.getDate(), //今天的日期
            today_s_month = today.getMonth(), //今天的月期
            today_s_year = today.getFullYear(), //今天的年期
            start_s_date = this.data.start_time.getDate(), //起始日期
            start_s_month = this.data.start_time.getMonth(); //起始月份

		if(today_s_month < start_s_month) {
            if (today_s_date > start_s_date) {
                the_next_month.setMonth(today_s_month + 1);
            };
		} else if (today_s_month === start_s_month) {
			if (today_s_date > start_s_date) {
                the_next_year.setFullYear(today_s_year + 1);
                the_next_month.setMonth(today_s_month + 1);
			};
		} else {
            the_next_year.setFullYear(today_s_year + 1);
            if (today_s_date > start_s_date) {
                the_next_month.setMonth(today_s_month + 1);
            };
		};

        //设置下一年纪念日
        the_next_year.setMonth(start_s_month);
        the_next_year.setDate(start_s_date);
        //设置下一月纪念日
        the_next_month.setDate(start_s_date);
        
        next_year = Math.floor((the_next_year - today.getTime()) / 1000 / 60 / 60 / 24);
        next_month = Math.floor((the_next_month - today.getTime()) / 1000 / 60 / 60 / 24);

        this.setData({
            next_month: next_month,
            next_year: next_year
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var begin = new Date('2011/03/06');
        this.setData({
            start_time: begin,
            from_time: begin.Format('yyyy/MM/dd'),
            to_time: new Date().Format('yyyy/MM/dd'),
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.calcFullDate();
        this.shakeHandler();
        this.calcNext();
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