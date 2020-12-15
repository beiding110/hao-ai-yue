const radian = Math.PI / 180;

function PorEngine(obj) {
    this.init(obj);
};

PorEngine.prototype = {
    init(obj) {
        this.$settings = obj;
        // this.B_beta_acc = 0;

        wx.stopDeviceMotionListening({});

        wx.startDeviceMotionListening({
            interval: 'ui',
            success: () => {
                console.log('por-engine初始化成功');
                
                wx.onDeviceMotionChange(event => {
                    var revent = this.device(event);
                    this.$settings.callback(revent);
                });
            },
            fail: function () {
                console.error('por-engine初始化失败')
            }
        });

        // wx.stopAccelerometer({});
        // wx.startAccelerometer({
        //     interval: 'ui',
        //     success: () => {                
        //         wx.onAccelerometerChange(event => {
        //             this.B_beta_acc = Math.abs(Math.atan2(event.y, event.z) * 57.3);
        //         });
        //     },
        //     fail: function () {
        //         console.error('加速度传感器初始化失败');
        //     }
        // })
    },
    device(event) {
        var a_alpha = event.alpha,
            B_beta = event.beta,
            //beta的取值范围为：0-90-0，期望为：0-90-180
            // B_beta = this.B_beta_acc,
            Y_gamma = event.gamma;

        var R_Z = -(Y_gamma * Math.cos( this.deg2radian(B_beta) )),
            R_X = (B_beta - 90) * Math.cos( this.deg2radian(Y_gamma) ),
            R_Y = -(a_alpha + Y_gamma);

        return {
            R_Z: R_Z,
            R_X: R_X,
            R_Y: R_Y
        }
    },
    deg2radian(deg) {
        return deg * radian;
    }
}

export default PorEngine