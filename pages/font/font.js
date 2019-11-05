Page({
    data: {
        testData: [],
        text: null
    },
    copy: function() {
        var t = this;
        //console.log(t.data)
        wx.setClipboardData({
            data: t.data.text,
            success: function(t) {
                wx.showModal({
                    title: "提示",
                    content: "复制成功",
                    success: function(t) {
                        t.confirm ? console.log("确定") : t.cancel && console.log("取消");
                    }
                });
            }
        });
    },
    onLoad: function(t) {
       var text = wx.getStorageSync('ocrText')
      //console.log(text)
        this.setData({
            testData: JSON.parse(text),
            img: getApp().globalData.img
        });
        for (var o = this.data.testData, n = [], a = 0, e = o.length; a < e; a++) {
            var s = o[a].words;
            n.push(s);
        }
        this.setData({
            text: n.toString()
        }), console.log(this.data.text);
    }
});