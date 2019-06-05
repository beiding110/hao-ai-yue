function MotionListener(obj) {
    this.init(obj);
};

MotionListener.prototype = {
    init(obj) {
        wx.startDeviceMotionListening({
            interval: 'game',
            success: function () {
                console.log('设备方向开始监听');
                wx.onDeviceMotionChange(obj.callback)
            },
            fail: function () {
                console.error('设备方向监听初始化失败！')
            }
        })
    }
}

export default MotionListener