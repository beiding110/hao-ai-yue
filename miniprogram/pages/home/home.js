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

        start_time: '',//计算起始日期

        from_time: '',
        to_time: ''
    },

    //计算纪念日
    calcFullDate: function() {
        var date,
            month = false,
            year = false;

        date = Math.ceil((new Date().getTime() - this.data.start_time.getTime()) / 1000 / 60 / 60 / 24);

        if (new Date().getDate() === this.data.start_time.getDate()) {
            if (new Date().getMonth() === this.data.start_time.getMonth()) {
                //计算周年
                year = new Date().getFullYear() - this.data.start_time.getFullYear();
            };

            //计算周月
            month = new Date().getMonth() + ((new Date().getFullYear() - this.data.start_time.getFullYear()) * 12) - this.data.start_time.getMonth();
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
        var the_next_year,
            the_next_month;

		if(today.getMonth() < this.data.start_time.getMonth()) {
			the_next_year = the_next_month = today;
		} else if (today.getMonth() === this.data.start_time.getMonth()) {
			if (today.getDate() <= this.data.start_time.getDate()) {
				the_next_year = the_next_month = today;
			} else {
				the_next_year = new Date().setFullYear(today.getFullYear() + 1);
				the_next_month = new Date().setMonth(today.getMonth() + 1);
			}
		} else {
			the_next_year = new Date().setFullYear(today.getFullYear() + 1);
			the_next_month = new Date().setMonth(today.getMonth() + 1);
		};

        //设置下一年纪念日
        the_next_year = new Date(the_next_year);
        the_next_year.setMonth(this.data.start_time.getMonth());
        the_next_year.setDate(this.data.start_time.getDate());
        //设置下一月纪念日
        the_next_month = new Date(the_next_month);
        the_next_month.setDate(this.data.start_time.getDate());
        
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