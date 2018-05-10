<template>
    <div class="hello">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
            <!-- slides -->
            <swiper-slide class="swiper-item"><img src="../assets/1.jpg" alt=""></swiper-slide>
            <swiper-slide  class="swiper-item"><img src="../assets/2.png" alt=""></swiper-slide>
            <swiper-slide  class="swiper-item"><img src="../assets/3.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
        <div>kkkk</div>
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
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    width: 100%;
}
    .swiper-item img{
        width: 100%;
    }
</style>
