// vue基本配置
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

// 顯示hover上去的提示
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

// 設定控制屬性的布林值
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// 迴圈的顯示內容可以放入object
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
        ]
    }
})

// 也可以單純放入array
var app41 = new Vue({
    el: '#app-41',
    data: {
        members: [
        "Daniel Chen",
        "David Cheng",
        "Destiny Chain"
        ]
    }
})

// event設定
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
        }
    }
})

// 利用輸入框來控制顯示的文字
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// 自定義標籤內容
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
        { text: 'Vegetables' },
        { text: 'Cheese' },
        { text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

// event動畫
var demmo = new Vue({
    el: '#demo',
    data: {
        show: true
    }
})