<template>
    <div class="hello">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><img src="../assets/1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/1.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },

                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        // you can find current swiper instance object like this, while the notNextTick property value must be true
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
