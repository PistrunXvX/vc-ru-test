<template>
        <div class="container">
            <div class="input root">
                <h1 class="user-input__main-text">
                    Сколько денег вы откладываете в месяц?
                </h1>
                <p class="user-input__second-text">
                    Ответьте и узнаете, сколько копят другие.
                </p>
                <div class="user-input">
                    <div class="user-value-container">
                        <div class="user-value" :style="{left: dialogPosition}">
                            <p class="user-value__text">
                                {{ value }} ₽
                            </p>
                        </div>
                    </div>
                    <div class="user-range">
                        <div class="user-range-container">
                            <input class="user-range__range" type="range" min='0' v-bind:max="maxValue" step="1" v-model="value"
                            @input='updateSlider' :style="{backgroundSize: backgroundSize}"
                            @mouseup="toggle" @touchend="toggle">
                        </div>
                    </div>
                </div>
            </div>
            <second-block :money="value" :maxMoney="maxValue" :mouseUp="isMouseUp" />
        </div>
</template>

<script>
    import SecondBlock from './SecondBlock.vue';

    export default {
        name: 'MainBlock',
        components: { SecondBlock },
        data() {
            return{
                value: 0,
                maxValue: 50000,
                isMouseUp: false,
                backgroundSize: '0% 100%',
                dialogPosition: '0%',
            }
        },
        methods: {
            updateSlider(e) {
                let clickedElement = e.target,
                    min = clickedElement.min,
                    max = clickedElement.max,
                    val = clickedElement.value;

                this.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
                this.dialogPosition = (val - min) * 100 / (max - min) + '%';

            },
            toggle() {
                this.isMouseUp = true; 
                console.log(this.isMouseUp);
            }
        }
    }
</script>

<style lang="stylus">
    
    @import '../stylus/global'

    .input
        z-index 20
        background-color white
        position relative

    .user-input__main-text
        color black-color
        font-size 22px
        font-weight 500
        font-family family-roboto
        line-height 26px
        margin-bottom 0px

    .user-input__second-text
        color black-color
        font-size 16px
        font-weight 400
        font-family family-roboto
        line-height 19px
        margin-top 11px

    .user-range
        position relative
        width 580px

    .user-range-container:before
        content '0 ₽'
        left 0
        bottom 0%
        position absolute
        display inline-block
        font-size 18px
        font-family family-roboto
        font-weight 500
        line-height 21px

    .user-range-container:after
        content '50 000 ₽'
        right 0%
        bottom 0%
        position absolute
        display inline-block
        font-size 18px
        font-family family-roboto
        font-weight 500
        line-height 21px
        

    .user-range__range[type=range]
        -webkit-appearance none
        width 455px
        background #E2E2E2
        background-image -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #FF9796), color-stop(100%, #FE4D4A))
        background-image -webkit-linear-gradient(left, #FF9796 0%,#FE4D4A 100%)
        background-image -moz-linear-gradient(left, #FF9796 0%, #FE4D4A 100%)
        background-image -o-linear-gradient(to right, #FF9796 0%,#FE4D4A 100%)
        background-image linear-gradient(to right, #FF9796 0%,#FE4D4A 100%)
        background-repeat: no-repeat
        border-radius 8px
        margin-top 48px
        margin-bottom 6px
        margin-left 30px
        height 9px

    .user-range__range[type=range]::-webkit-slider-runnable-track
        appearance none
        height 9px
        -webkit-appearance none
        background-color transparent
        margin-top: -1px

    .user-range__range[type=range]::-webkit-slider-thumb
        appearance none
        -ms-progress-appearance none
        height 25px
        width 25px
        border 8px solid red-color
        border-radius 25px
        background white
        margin-top -6px
        box-shadow 0px 9px 10px rgba(254, 77, 74, 0.1)

    .user-range__range[type=range]::-moz-range-track
        width 50%
        height 5px
        background-color transparent

    .user-range__range[type=range]::-moz-range-thumb 
        appearance none
        height 25px
        width 25px
        border 8px solid red-color
        border-radius 25px
        background white
        margin-top -6px

    .user-value-container
        width 440px
        position relative

    .user-value
        position absolute
        width 80px
        left 0%
        height 40px
        margin-left -5px
        background-image url(../assets/DialogPopup.svg)
        background-repeat no-repeat
        background-size 100%
        background-position 50% 50%

    .user-value__text
        margin 0
        text-align center
        font-size 16px
        font-family family-roboto
        font-weight 500
        line-height 18px
        color white
        padding 8px

</style>
