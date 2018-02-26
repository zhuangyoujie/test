<template>
    <div>
        <v-distpicker @selected="onSelected"></v-distpicker>
        <Page :total="100" show-total ></Page>
    </div>

</template>

<script>
    import VDistpicker from 'v-distpicker'
    import { Page } from 'iview';
    export default {
        name: 'picker',
        data() {
            return {
                "province": "",
                "city": "",
                "area": ""
            }
        },
        methods:{
            onSelected(data) {
                alert(data.province + ' | ' + data.city + ' | ' + data.area)
                console.log(data)
            },
        },
        components: { VDistpicker,Page},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ivu-page-item-active {
        background-color: red;
        border-color: red;
    }
</style>
