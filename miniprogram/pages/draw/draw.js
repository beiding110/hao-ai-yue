// miniprogram/pages/draw/draw.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canvasWidth: '',
        canvasHeight: ''
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
        const context = wx.createCanvasContext('mainCanvas')

        context.setStrokeStyle('#00ff00')
        context.setLineWidth(5)
        context.rect(0, 0, 200, 200)
        context.stroke()
        
        context.setStrokeStyle('#ff0000')
        context.setLineWidth(2)
        context.moveTo(160, 100)
        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
        context.moveTo(140, 100)
        context.arc(100, 100, 40, 0, Math.PI, false)
        context.moveTo(85, 80)
        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
        context.moveTo(125, 80)
        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
        context.stroke()

        context.draw()
    },

    canvalError: function(e) {
        console.error(e.detail.errMsg);
    }
})