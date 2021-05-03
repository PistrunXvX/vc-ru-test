<template>
    <div class="container">
        <!-- <transition name="show-statistic"> -->
        <div class="statistic-wrapper statistic-animated" :class="{ scrollstat: show }">
            <div class="statistic row">
                <div class="statistic-block col">
                        <div class="statistic-block__img" :style='{ backgroundImage: getImg}'>
                            <p class="text-sum statistic__text">
                            ~ {{ middleMoney }} ₽
                        </p>
                    </div>
                </div>
            </div>
            <div class="statistic-block-2">
                <p class="statistic-block-2__text">
                    в среднем откладывают читатели vc.ru
                </p>    
            </div>
            <div class="statistic-block-3 row">
                <div class="statistic-diagramm col">
                    <div class="diagramm-small">
                        <diagramm :percent="saveSmallMoney" />
                    </div>
                    <p class="diagramm__text text-sum">
                        {{saveSmallMoney}}%
                    </p>
                    <p class="diagramm__text-dark">
                        читателей откладывают <br>
                        больше 1000 ₽ в месяц
                    </p>
                </div>
                <div class="statistic-diagramm col">
                    <div class="diagramm-small">
                        <diagramm :percent="saveBigMoney" />
                    </div>
                    <p class="diagramm__text  text-sum">
                        {{saveBigMoney}}%
                    </p>
                    <p class="diagramm__text-dark">
                        читателей откладывают <br>
                        больше 10 000 ₽ в месяц
                    </p>
                </div>
            </div>
        </div>
        <!-- </transition> -->
        <div class="statistic-wrapper">
            <div class="statistic-button">
                <button v-on:click="show = !show" :class="{ statisticButtonAfter: show }" class="statistic__button text-sum">
                    <span v-if="!show">
                        А как в среднем у читателей vc.ru?
                    </span>
                    <span v-else>
                        Свернуть
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import Diagramm from './Diagram';

export default {
    name: 'showStatistic',
    components: { Diagramm },
    data() {
        return{
            middleMoney: 22000,
            currentImg: '',
            saveSmallMoney: 76,
            saveBigMoney: 18,
            show: false,
        }
    },
    computed: {
        getImg() {
            let value = this.middleMoney,
                img_1 = 'url("MoneyGroup_1.svg ")',
                img_2 = 'url("MoneyGroup_2.svg ")',
                img_3 = 'url("MoneyGroup_3.svg")',
                img_4 = 'url("MoneyGroup_4.svg ")',
                img_5 = 'url("MoneyGroup_5.svg ")';
            if (value < 11000) {
                return img_1;
            } else if (value >= 11000 && value < 21000) {
                 return img_2;
            } else if (value >= 21000 && value < 31000) {
                 return img_3;
            } else if (value >= 31000 && value < 41000) {
                 return img_4;
            } else{
                 return img_5;
            }
        }
    }
}
</script>

<style lang="stylus">

    @import '../stylus/global'

    .statistic-wrapper
        background-color purple-color

    .statistic-animated
        max-height 0px
        overflow hidden
        transition max-height 0.7s ease-in-out
        display block

    .text-sum
        font-family family-roboto
        color red-color

    .statistic__text
        font-size 22px
        line-height 25px
        font-weight bold
        text-align center
        padding-bottom 10px

    .diagramm__text 
        font-size 20px
        line-height 23px
        font-weight bold
        text-align center

    .statistic-block-2__text
        font-family family-roboto
        font-size 16px
        line-height 18px
        color black-color
        font-weight 400
        text-align center

    .diagramm__text-dark
        font-family family-roboto
        font-size 16px
        line-height 18px
        color black-color
        font-weight 400
        text-align center

    .statistic-block__img
        background-size 33%
        background-position 50% 50%
        background-repeat no-repeat
        padding-top 150px
        padding-bottom 10px
        margin-top 20px

    .statistic-block-2
        margin-top 10px

    .statistic__button
        border none 
        background-color transparent
        font-weight 400

    .statistic__button::after
        content ''
        background-image url(../assets/ArrowDown.svg)
        background-size contain
        background-repeat no-repeat
        background-position 50% 50%
        width 15px
        height 10px
        margin-left 15px
        display inline-block
    
    .statistic-button
        text-align center
        padding-bottom 25px
        padding-top 25px

    .scrollstat
        max-height 700px
        
    .statisticButtonAfter::after
        content ''
        background-image url(../assets/ArrowDown.svg)
        background-size contain
        background-repeat no-repeat
        transform rotate(180deg)
        background-position 50% 50%
        width 15px
        height 10px
        margin-left 15px
        display inline-block

</style>