<template>
    <div class="scroll-wrap">
        <div class="class-scroll">
            <ul>
                <li class="class-Item active">亿恩恩</li>
                <li class="class-Item ">亿恩恩</li>
                <li class="class-Item ">亿恩恩</li>
                <li class="class-Item">亿恩恩</li>
                <li class="class-Item">亿恩恩</li>
                <li class="class-Item">亿恩恩</li>
                <li class="class-Item">亿恩恩</li>
                <li class="class-Item">亿恩恩</li>
            </ul>
        </div>
        <div class="scroll-content">
            <ul>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>
                <li>亿恩恩亿恩恩亿恩恩亿恩恩</li>


            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'jd',
        data() {
            return {

            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .scroll-wrap {
     /*position:relative ;*/
     width: 100%;
     position: fixed;
     top: 75px;
     bottom: 0;
     left: 0;
     z-index: 8;
     padding-bottom: 45px;
     box-shadow: 0 0 9px rgba(0,0,0,0.4);
     -webkit-transform: translate3d(0,0,0);
     -ms-transform: translate3d(0,0,0);
     -o-transform: translate3d(0,0,0);
     -moz-transform: translate3d(0,0,0);
     transform: translate3d(0,0,0);
     -webkit-transition: -webkit-transform 400ms ease-in-out;
     -ms-transition: -ms-transform 400ms ease-in-out;
     -moz-transition: -moz-transform 400ms ease-in-out;
     -o-transition: -o-transform 400ms ease-in-out;
     transition: transform 400ms ease-in-out;

 }
.class-scroll ul {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 84px;
    padding-bottom: 80px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: #f4f4f4;

}
 .class-scroll li {
     color: #666666;
     font-size: 13px;
     display: -webkit-box;
     display: -moz-box;
     width: 84px;
     height: 46px;
     padding-left: 10px;
     padding-right: 4px;
     line-height: 20px;
     background-color: #f4f4f4;
     text-overflow: ellipsis;
     overflow: hidden;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     -moz-line-clamp: 2;
     -moz-box-orient: vertical;
     -webkit-box-pack: center;
     -moz-box-pack: center;
     box-pack: center;
     border-bottom: 1px solid #CFCFCF;
     border-right: 1px solid #CFCFCF;
 }
ul .active {
     background: #fff;
     color: #47b34f;
 }
 ul .active:before{
     position: absolute;
     top: 0;
     left: -1px;
     content: '';
     width: 3px;
     height: 46px;
     background-color: #47b34f;
 }

 ul .class-Item::after{
     position: absolute;
     top: 0;
    right: 0;
     content: '';
     width: 1px;
     height: 46px;
     background-color: #fff;
 }
.scroll-content {
    position: absolute;
    /*width: 100px;*/
    left: 84px;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background-color: #FFF;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
 .scroll-content li {
     width: 100%;
     height: 30px;
 }



</style>
