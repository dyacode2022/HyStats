import Vue from 'vue'

new Vue({
    el: '#SearchBtn',
    data: {
        message: 'on Click Search Button'
    },
    methods: {
        onClickSearch: function (event) {
            alert('Hello ' + this.message + '!')
        }
    }
})
