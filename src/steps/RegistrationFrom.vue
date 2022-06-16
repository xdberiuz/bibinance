<template>
    <div class="section">
        <div class="section__left">
            <h1 class="reg__title">Поздравляем, вам стали доступны инвестиции на платформе «Halyk Инвестиции»!</h1>
            <div style="display: flex;justify-content: center;">
                <img src="../assets/img/step_registration.png" alt="Успешная регистрация" class="reg__img">
            </div>
            <div class="reg__text">
                <p style="margin-bottom: 10px">Чтобы начать зарабатывать, оставьте свои контактные данные.</p>
                <p>Специалист свяжется с Вами в течение 1 дня</p>
            </div>
        </div>
        <div class="section__right">
            <div class="reg__userInfo">
                <label class="reg__textInfo" for="userName">Введите имя</label>
                <input type="text" name="userName" id="userName">
            </div>
            <div class="reg__userInfo">
                <label class="reg__textInfo" for="userLastName">Введите фамилию</label>
                <input type="text" name="userLastName" id="userLastName">
            </div>
            <div class="reg__userInfo">
                <label class="reg__textInfo" for="userEmail">Введите E-mail</label>
                <input type="mail" name="userEmail" id="userEmail">
            </div>
            <div class="reg__userInfo">
                <label class="reg__textInfo" for="userTel">Введите телефон</label>
                <input type="text" v-model="value" name="userTel" id="userTel" @input="acceptNumber">
            </div>
            <router-link class="reg__success" to="/final_step"><span>Получить доступ</span></router-link>
            <div class="reg__policy">
                <label for="policy">
                    <input type="radio" name="policy" id="policy">
                    <span>C политикой конфиденциальности </span> ознакомлен(а)
                </label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg-form',
    data() {
        return {
            value: ''
        }
    }, methods: {
        acceptNumber() {
            var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    }
}
</script>
<style>
.section {
    display: flex;
    position: relative;
    height: 517px;
    max-width: 970px;
    margin: 5% auto;
    background-color: white;
    border-radius: 4px;
}

.section__left {
    max-width: 600px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.reg__title {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #1E2329;
}

.reg__text {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #1E2329;
}

.section__right {
    min-width: 370px;
    height: inherit;
    background: #171717;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.reg__userInfo {
    display: flex;
    flex-direction: column;
}

.reg__textInfo {
    margin-left: 14px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #757575;
}

.reg__userInfo input {
    background-color: transparent;
    color: #fff;
    border: 1px solid #757575;
    font-size: 16px;
    border-radius: 5px;
    height: 48px;
    padding: 0 14px 0 14px;
}

input:focus {
    outline: none !important;
    border: 1px solid #F0B90B;
}

.reg__policy span {
    margin-right: 5px;
}

.reg__success {
    background: #F0B90B;
    border-radius: 4px;
    width: 100%;
    line-height: 48px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
}

.reg__success span {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #181A20;
}

.reg__policy {
    display: flex;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    display: flex;
    justify-content: center;
}

.reg__policy label {
    display: flex;
    align-items: center;
}

.reg__policy label span {
    cursor: pointer;
    color: #F0B90B;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
    /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance: textfield;
    /* Firefox */
}

@media screen and (max-width: 900px) {
    img {
        width: 320px;
    }
}

@media screen and (max-width: 791px) {
    #app {
        padding: 0;
    }

    .section {
        margin: 0;
        flex-direction: column;
        height: unset;
    }

    .section__left {
        width: unset;
        max-width: unset;
        height: 480px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section__right {
        min-width: unset;
        width: unset;
        height: 495px;
    }

    img {
        width: 100%;
    }

    .reg__title {
        text-align: center;
    }

    .reg__text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .reg__text p {
        text-align: center;
    }

    .reg__policy span {
        margin-right: 2px;
    }
}
</style>
