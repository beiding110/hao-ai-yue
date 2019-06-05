// miniprogram/pages/draw/draw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canvasWidth: '',
        canvasHeight: '',

        touchStart: 0,
        touchEnd: 0,
        drawLength: 0,
        drawState: 0,

        deck: [0, 0, 0, 0, 0]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    canvasWidth: res.windowWidth,
                    canvasHeight: res.windowHeight
                });
            },
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    drawMoveHandler: function(e) {
        // console.log(e.touches[0].clientY, e);
        var cy = e.touches[0].clientY,
            delta = this.data.touchStart ? cy - this.data.touchStart : 0,
            drawState = 0;

        
        // if(delta > 0 || delta < -10) {
        //     //重置抽卡操作
        //     console.warn('重置')
        // };

        //增加抽卡距离
        var drawLength = this.data.drawLength;
        drawLength = drawLength - delta;
        if (drawLength > 100) {
            drawState = 1
        };

        // console.log(drawLength)
        this.setData({
            touchStart: cy,
            drawLength,
            drawState
        });
    },
    drawMoveEndHandler: function() {
        if(this.data.drawState) {
            console.info('draw!');
        };
        console.error('重置！！！！！！！！！！！');
    },
    shuffleHandler: function() {
        var deckLength,
            deck,
            loopTime = 0,
            index;

        deck = this.data.deck;
        deckLength = this.data.deck.length;
        
        var timer = setInterval(() => {
            index = Math.round(Math.random() * deckLength);
            deck[index] = -50;
            this.setData({
                deck
            });
            loopTime ++;

            if (loopTime > deckLength) {
                clearInterval(timer)
            }
            console.log(index)
        }, 50);
        
    }
})