<template>
    <div class="section__final">
        <div class="section__left">
            <h1 class="final__title">Благодарим Вас
                за регистрацию!</h1>
            <h2 class="final_subtitle">Ваша заявка на участие в инвестиционном проекте Halyk Finance принята.</h2>
            <div class="final__mobImg">
                <img src="../assets/img/finalStep.png" alt="Успешная регистрация">
            </div>
            <div class="final__text">В ближайшее время Вы получите выгодное предложение от лидера рынка инвестицый.
            </div>
            <div class="final__text">Спасибо за доверие к нашей команде.
                Halyk Finance строитсветлое будущее с лидерами! </div>
            <router-link class="final__btn" to="/bibinance/"><span>На главную</span></router-link>
        </div>
        <div class="section__desktop">
            <img src="../assets/img/finalStep.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'final-step',
    data() {
        return {

        }
    }
}
</script>
<style>
#app {
    padding: 0;
}

.final__mobImg {
    display: none;
}

.section__final {
    position: relative;
    padding-left: 40px;
    padding-top: 40px;
    width: 100vw;
    height: 100vh;
    margin: 0;
    max-width: unset;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}

.section__left {
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
}

.final__title {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #1E2329;
}

.final__img img {
    position: absolute;
    width: 500px;
    top: 60px;
    right: 73px;
}

.final_subtitle {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #000;
}

.final__text {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
}

.final__btn {
    font-family: 'IBM Plex Sans', sans-serif;
    background: #F0B90B;
    border-radius: 4px;
    width: 129px;
    line-height: 48px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1250px) {
    .section__desktop img {
        width: 500px;
    }
}

@media screen and (max-width: 1031px) {
    .section__desktop img {
        width: 400px;
    }

    .final__title {
        font-size: 36px;
    }

    .final_subtitle {
        font-size: 20px;
    }

    .final__text {
        font-size: 16px;
    }
}

@media screen and (max-width: 847px) {
    .section__final {
        height: 100vh;
        padding: 0;
    }

    .section__desktop {
        display: none;
    }

    .final__mobImg {
        display: block;
    }

    .section__left {
        max-width: unset;
        width: unset;
        height: unset;
        align-items: center;
        justify-content: space-between;
        height: inherit;
        padding: 50px 0 50px 0;
    }

    .final__text,
    .final__title,
    .final_subtitle {
        text-align: center;
        padding: 0 10px 0 10px;
    }

    img {
        width: 450px;
    }
}

@media screen and (max-width: 450px) {
    img {
        width: 320px;
    }
    
}
</style>
