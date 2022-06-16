<template>
    <div class="section">
        <div class="warper">
            <h1 class="final__title">Благодарим Вас
                за регистрацию!</h1>
            <h2 class="final_subtitle">Ваша заявка на участие в инвестиционном проекте Halyk Finance принята.</h2>
            <div class="final__img">
                <img src="../assets/img/finalStep.png" alt="Успешная регистрация">
            </div>
            <div class="final__text">В ближайшее время Вы получите выгодное предложение от лидера рынка инвестицый.
            </div>
            <div class="final__text">Спасибо за доверие к нашей команде.
                Halyk Finance строитсветлое будущее с лидерами! </div>
            <router-link class="final__btn" to="/bibinance/"><span>На главную</span></router-link>
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
<style scoped>
.section {
    position: relative;
    padding-left: 40px;
    padding-top: 40px;
    width: 1200px;
}

.warper {
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
</style>
