<template>
    <div class="wrapper" :class="{ scroll: this.mouseUp}">
        <div class="invest">
            <h2 class="invest__text">
                Вы откладываете {{ money }} ₽ в месяц. <br>
                За три года вы бы заработали:
            </h2>
        </div>
        <div class="money row">
            <div class="money-block-1 col">
                <div class="img-money-block row">
                    <div class="money-block__img col" :style="{ backgroundPostition: coinPosition[0]}">
                        
                    </div>
                </div>
                <p class="money-block__sum">
                    ~{{ sumProcent(this.money) }} ₽
                </p>
                <p class="money-block__text">
                    если откладывать
                    под матрас
                    <span class="money-block__popup" @click="showPopup_1">
                        ?
                    </span>
                </p>
                <div class="popup popup_1" :style='{left: leftPosition, top: topPosition}' ref='popup_1'>
                    <p class="popup__text" v-if="activePopup[0]">
                        В этом мало смысла — такие <br>
                        накопления «съедает» инфляция
                    </p>
                </div>
            </div>
            <div class="money-block-2 col">
                <div class="img-money-block row">
                    <div class="money-block__img col">
                        
                    </div>
                </div>
                <p class="money-block__sum">
                    ~{{ sumProcentCapitalized(this.money) }} ₽
                </p>
                <p class="money-block__text">
                    если откладывать
                    на депозит
                    <span class="money-block__popup" @click="showPopup_2">
                        ?
                    </span>
                </p>
                <div class="popup popup_2" :style='{left: leftPosition, top: topPosition}' ref='popup_2'>
                    <p class="popup__text" v-if="activePopup[1]">
                       Ставки по вкладам различны в разных <br>
                        банках и зависят от многих факторов, <br>
                        в частности, от <a class="popup__href" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1" target="_blank">ключевой ставки <br>
                        Центрального банка РФ¹.</a> 
                    </p>
                </div>
            </div>
            <div class="money-block-3 col">
                <div class="img-money-block row">
                    <div class="money-block__img col">
                        
                    </div>
                </div>
                <p class="money-block__sum">
                   до ~{{ sumProcentPif(this.money) }} ₽
                </p>
                <p class="money-block__text">
                    если инвестировать в ПИФ
                    «Альфа-Капитала»
                    <span class="money-block__popup" @click="showPopup_3">
                        ?
                    </span>
                </p>
                <div class="popup popup_3" :style='{left: leftPosition, top: topPosition}' ref='popup_3' v-if="activePopup[2]">
                    <p class="popup__text">
                        Вы становитесь инвестором набора <br>
                        компаний, который определяют <br>
                        профессиональные управляющие. <br>
                        Они решают, когда покупать <br>
                        и продавать ценные бумаги, чтобы <br>
                        обеспечить инвестиционный доход. <br>
                        Купить или продать <a class="popup__href" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2" target="_blank">паи фонда можно <br> в любой момент². </a> 
                    </p>
                </div>
            </div>
        </div>
        <show-statistic>

        </show-statistic>
        <div class="about-invest row">
            <div class="col start-invest">
                <p class="start-invest__text">
                    Как начать инвестировать?
                </p>
            </div>
            <div class="col show-invest">
                <a class="show-invest__button" href="https://alfabank.ru/make-money/investments/" target="_blanc">
                    Узнать 
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    import showStatistic from './showStatistic';

    export default {
        name: 'SecondBlock',
        props: ['money', 'maxMoney', 'mouseUp'],
        components: {showStatistic},
        data() {
            return{
                value: this.money,
                actives: false,
                leftPosition: '',
                topPosition: '',
                activePopup: [
                    false,
                    false,
                    false,
                ],
                coinPosition: ['', '', ''],
            }
        },
        methods: {
            showPopup_1() {
                    // let clientX = e.clientX,
                    //     clientY = e.clientY,
                    //     blockWidth = this.$refs.popup_1.offsetWidth,
                    //     blockHeight = this.$refs.popup_1.offsetHeight;
                    // this.leftPosition = clientX - blockWidth + (blockWidth / 2) + 'px';
                    // this.topPosition = clientY - blockHeight + 'px';
                    this.activePopup[0]=!this.activePopup[0];
                    this.activePopup[1]= false;
                    this.activePopup[2]= false;
            },
            showPopup_2() {
                    // let clientX = e.clientX,
                    //     clientY = e.clientY,
                    //     blockWidth = this.$refs.popup_2.offsetWidth,
                    //     blockHeight = this.$refs.popup_2.offsetHeight;
                    // this.leftPosition = clientX - blockWidth + (blockWidth / 2) + 'px';
                    // this.topPosition = clientY - blockHeight + 'px';
                    this.activePopup[1]=!this.activePopup[1];
                    this.activePopup[0]= false;
                    this.activePopup[2]= false;
            },
            showPopup_3() {
                    // let clientX = e.clientX,
                    //     clientY = e.clientY,
                    //     blockWidth = this.$refs.popup_3.offsetWidth,
                    //     blockHeight = this.$refs.popup_3.offsetHeight;
                    // this.leftPosition = clientX - blockWidth + (blockWidth / 2) + 'px';
                    // this.topPosition = clientY - blockHeight + 'px';
                    this.activePopup[2]=!this.activePopup[2];
                    this.activePopup[1]= false;
                    this.activePopup[0]= false;
            },
            sumProcent(money) {
                return (money * 36).toLocaleString('ru');
            },
            sumProcentCapitalized(money) {
                let sum = 0;
                let sumProcent = 0,
                    currentProcent = 0,
                    procent = 0.0698,
                    timeDeposit = 36,
                    currentDays = 0,
                    currentMonth = 2,
                    value = money;
                sumProcent = Math.abs(((value * procent) / 366 * 31));
                currentDays;
                sum = Math.abs(value + sumProcent);
                currentProcent = sumProcent;
                for (let i = 2; i <= timeDeposit; i++) {
                    switch (currentMonth) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            currentDays = 31;
                            break;
                        case 2:
                            currentDays = 28;
                            break;
                        default:
                            currentDays = 30;

                    }
                    if (currentMonth == 12) {
                        currentMonth = 1;
                    }
                    sumProcent = Math.abs(((sum + value) * procent) / 366 * currentDays);
                    currentProcent += sumProcent;
                    sum = currentProcent + (value * i);
                    currentMonth++;
                }
                return (Math.floor(sum)).toLocaleString('ru');
            },
            sumProcentPif(money) {
                let sum = 0;
                let sumProcent = 0,
                    currentProcent = 0,
                    procent = 0.0519,
                    timeDeposit = 36,
                    currentDays = 0,
                    currentMonth = 6,
                    value = money;
                sumProcent = Math.abs(((value * procent) / 366 * 31));
                currentDays;
                sum = Math.abs(value + sumProcent);
                currentProcent = sumProcent;
                for (let i = 2; i <= timeDeposit; i++) {
                    switch (currentMonth) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            currentDays = 31;
                            break;
                        case 2:
                            currentDays = 28;
                            break;
                        default:
                            currentDays = 30;

                    }
                    if (currentMonth == 12) {
                        currentMonth = 1;
                    }
                    if (i > 3 && i <= 6) {
                        procent = 0.1134;
                    } else if ( i > 6 && i <= 12) {
                        procent = 0.1525;
                    } else if (i > 12 && i < 36) {
                        procent = 0.2397;
                    } else if (i == 36) {
                        procent = 0.7121;
                    }
                    sumProcent = Math.abs(((sum + value) * procent) / 366 * currentDays);
                    currentProcent += sumProcent;
                    sum = currentProcent + (value * i);
                    currentMonth++;
                }
                return (Math.floor(sum)).toLocaleString('ru');
            },
            colCoin() {
                let coin_1 =(this.sumProcent(this.maxMoney) / this.sumProcent(this.money)) ,
                    coin_2 = 10 - (this.sumProcentCapitalized(this.maxMoney) / this.sumProcentCapitalized(this.money) ),
                    coin_3 = 10 - (this.sumProcentPif(this.maxMoney) / 10);

                // coin_1 = coin_1.toFixed(0);
                // coin_2 = coin_2.toFixed(0);
                // coin_3 = coin_3.toFixed(0);

                console.log(coin_1);
                console.log(coin_2);

                let coins = [coin_1, coin_2, coin_3];
                
                for (let i = 0; i < coins.length; i++) {
                    if (coins[i] == 2) {
                        this.coinPosition[i] = '55% 50%, 45% 50%;';
                    } else if (coins[i] == 3) {
                        this.coinPosition[i] = '65% 50% ,55% 50%, 45% 50%;';
                    } else if (coins[i] == 4) {
                        this.coinPosition[i] = '65% 50% ,55% 50%, 45% 50%, 35% 50%;';
                    } else if (coins[i] == 5) {
                        this.coinPosition[i] = '75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%;';
                    } else if (coins[i] == 6) {
                        this.coinPosition[i] = '75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%, 25% 50%;';
                    } else if (coins[i] == 7) {
                        this.coinPosition[i] = '85% 50% ,75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%, 25% 50%;';
                    } else if (coins[i] == 8) {
                        this.coinPosition[i] = '85% 50% ,75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%, 25% 50%, 15% 50%;';
                    } else if (coins[i] == 9) {
                        this.coinPosition[i] = '95% 50% ,85% 50% ,75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%, 25% 50%, 15% 50%;';
                    } else if (coins[i] == 10) {
                        this.coinPosition[i] = '95% 50% ,85% 50% ,75% 50% ,65% 50% ,55% 50%, 45% 50%, 35% 50%, 25% 50%, 15% 50%, 5% 50%;';
                    }
                }
            }
        },
        watch: {
            value: function() {
                this.colCoin();
            }
        }
    }
</script>
<style lang="stylus">

    @import '../stylus/global'

    .wrapper {
        width: 655px
        margin-top 50px
        transform translateY(-1000px)
        z-index 1
        background-color white
    }

    .invest
        margin-bottom 25px

    .invest__text
        font-size 22px
        font-family family-roboto
        font-weight 500
        color black-color
        line-height 26px

    .money-block__img
        height: 80px;
        background-image url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg),
                         url(../assets/Money.svg)
        background-repeat no-repeat
        background-size contain
        background-position 55% 50%

    .money-block__sum
        font-size 25px
        font-family family-roboto
        font-weight 700
        line-height 29px
        text-align center
        color red-color
        margin-top 15px

    .money-block__text
        font-size 16px
        font-family family-roboto
        font-weight 400
        line-height 18px
        text-align left

    .money-block__popup
        width 20px
        height 20px
        background-color purple-color
        display inline-block
        font-size 13px
        font-family family-roboto
        font-weight 400
        color red-color
        text-align center
        padding-top 2px
        border-radius 10px
        cursor pointer
        transition color, background-color 0.3s

    .money-block__popup:hover
        color white
        background-color red-color

    .start-invest__text
        font-size 16px
        font-family family-roboto
        font-weight bold
        font-style normal
        color black-color
        line-height 18px
        text-align end
        margin-top 5px

    .about-invest
        margin-top 35px !important
        margin-bottom 35px !important

    .show-invest__button
        font-size 16px
        font-family family-roboto
        font-weight bold 
        font-style normal
        color white
        line-height 19px
        padding 13px 40px
        background-color red-color
        text-decoration none
        border-radius 5px
        cursor pointer
        transition color, background-color 0.3s

    .show-invest__button:hover
        background-color #AB2927
        color #E8E8E8

    .money
        position relative

    .popup
        position absolute
        background-repeat no-repeat
        background-size cover

    .popup__text
        font-family family-roboto
        font-size 14px
        font-weight 500
        font-style normal
        color white
        padding 15px 35px

    .popup_1
        top 35%
        left -7%
        background-image url(../assets/DialogSmall.svg)
    
    .popup_2
        top 20%
        left 25%
        background-image url(../assets/DialogMiddle.svg)

    .popup_3
        top -15%
        left 25%
        background-image url(../assets/DialogBig.svg)

    .popup__href
        color white
        text-decoration-color white
        transition color 0.3s

    .popup__href:hover
        color #E8E8E8

    .scroll
        transform translateY(0px)
        transition transform 1.5s ease-in-out

</style>

