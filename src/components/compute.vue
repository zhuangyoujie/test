<template>
    <table border="1" cellspacing="0" width="50%" height="150">
        <tr><th>班级</th> <th>姓名</th><th>年龄</th> <th>电话</th> </tr>
        <tr><td rowspan="2">601班</td> <td>Jack</td> <td>24</td> <td>1351234567</td>  </tr>
        <tr> <td>Tom</td> <td>22</td> <td>1351234567</td>  </tr>
        <!--rowspan中必须指定要合并的列数目，是两行还是三行等等-->
        <tr><td  rowspan="3">602班</td> <td>Rose</td> <td>22</td> <td>1351234567</td>  </tr>
        <tr> <td>张三</td> <td>25</td> <td>1351234567</td>  </tr>
        <tr> <td>李四</td> <td>25</td> <td>1351234567</td>  </tr>
    </table>
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

        },
        data() {
            return {

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
