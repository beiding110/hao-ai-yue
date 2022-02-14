// components/nav-menu/main.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        navArr: [
            { img: '../../images/icon/memorandum.png', text: '出差备忘录', url:'/pages/memorandum/main' },
            { img: '../../images/icon/oath.png', text: '我们的誓言', url:'/pages/oath/oath' },
            { img: '../../images/icon/invitation.png', text: '请帖', url:'/pages/invitation/invitation' },
            { img: '../../images/icon/painting.png', text: '纪念日海报', url:'/pages/painting/painting' },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabHandler(e) {
            var ds = e.currentTarget.dataset,
                data = ds.data;

            wx.navigateTo({
                url: data.url
            });
        }
    }
})
