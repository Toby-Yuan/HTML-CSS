// vue基本配置
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

// 顯示title
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

var app8 = new Vue({
    el: '#app-8',
    data: {
        text: '<span>Hello World!</span>'
    }
})

var app9 = new Vue({
    el: '#app-9',
    data: {
        imgSrc: 'https://images.unsplash.com/photo-1479568933336-ea01829af8de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9926ef56492b20aea8508ed32ec6030&auto=format&fit=crop&w=2250&q=80'
    }
})

var app10 = new Vue({
    el: '#app-10',
    data: {
        isTransform: false
    }
});

var app11 = new Vue({
    el: '#app-11',
    data: {
        text: '',
        textarea: '',
        checkboxArray: [],
        checkbox1: false,
        selected: '',
        singleRadio: ''
    }
})

var app12 = new Vue({
    el: '#app-12',
    data: {
      isTransform: false,
      boxColor: false,
      objectClass: {
        'rotate': false,
        'bg-danger': false,
      },
      arrayClass: [],
      styleObject: {
        width: '300px',
        height: '300px',
        backgroundColor: 'red',
        borderWidth: '5px'
      },
      styleObject2: {
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.16)'
      },
      styleObject3: {
        userSelect: 'none'
      }
    },
  });

  var app13 = new Vue({
    el: '#app-13',
    data: {
      arrayData: [
        {
          name: '小明',
          age: 16
        },
        {
          name: '漂亮阿姨',
          age: 24
        },
        {
          name: '杰倫',
          age: 20
        }
      ],
      objectData: {
        ming: {
          name: '小明',
          age: 16
        },
        auntie: {
          name: '漂亮阿姨',
          age: 24
        },
        jay: {
          name: '杰倫',
          age: 20
        }
      },
      filterArray: [],
      filterText: ''
    },
    methods: {
        reverseArray: function(){
            this.arrayData.reverse();
        },
        filterData: function(){
            var vm = this;
            vm.filterArray = vm.arrayData.filter(function(item){
                return item.name.match(vm.filterText);
            });
        },
        cantWork: function(){
            //this.arrayData.length = 0;
            //this.arrayData[0] = {
            //    name: '小強',
            //    age: 99
            //}
            Vue.set(this.arrayData, 0,{
              name: '小強',
              age: 99
            })
        }
    }
  });