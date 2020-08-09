// components/marry/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		target: {
			type: String
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		date: '',
		discription: ''
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		getDate() {
			var targetDate = new Date(this.data.target).getTime(),
				todayDate = new Date().getTime(),
				discription = '';

			var remainMS = Math.abs(targetDate - todayDate),
				remainDate = remainMS / 1000 / 60 / 60 / 24;
			
			if (targetDate > todayDate) {
				remainDate = Math.ceil(remainDate);
				discription = '距婚期';
			} else {
				remainDate = Math.floor(remainDate);
				discription = '婚后';
			};

			this.setData({
				date: remainDate,
				discription
			});
		}
	},
	attached() {
		this.getDate();
	}
})
