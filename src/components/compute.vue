<template>
    <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
    /**
     * 省 市 区/县城 三联动选择器
     */

    export default {
        name: 'ao',
        created() {

        },
        // methods: {
        //     reversedMessage: function () {
        //         return this.message.split('').reverse().join('')
        //     }
        // },
        watch: {

        },

        computed: {
            // // 计算属性的 getter
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        },
        data() {
            return {
                message: 'Hello'
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ivu-page-item-active {
        background-color: red;
        border-color: red;
    }
</style>
