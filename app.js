new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        datou: 'nihao',
        count: 0,
        x: 0,
        y: 0
    },
    // methods用于存放方法
    methods: {
        get: function() {
            alert("按钮别点击了" + (++this.count))

        },
        // event表示当前移动事件的对象
        handle: function(event) {
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});