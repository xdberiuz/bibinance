<template>
  <div class="header">
    <div class="header__logo">
      <img class="header__img" src="../assets/img/mainLogo.png" alt="Binance">
    </div>
    <div class="header__title">
      <span class="header__title-bold"> Halyk Finance</span> сколько вы сможете зарабатывать на инвестициях?
    </div>
    <div class="header__text">
      Пройдите опрос от <span class="header__text-bold">Halyk Bank Finance</span> - и получите доступ к платформе
    </div>
    <router-link class="header__link" to="/step_1">
      <span>Получить доступ</span>
    </router-link>
  </div>
</template>
<script>
</script>

<style>
body {
  background-color: #181A20;
}


.header__img {
  width: 100%;
}

.header {
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 420px;
  width: 864px;
  margin: 10% auto;
}

.header__title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 48px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;

}

.header__title-bold,
.header__text-bold {
  font-weight: bold;
}

.header__text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #FFFFFF;
}

.header__link {
  width: 192px;
  height: 48px;
  position: relative;
  background-color: #F0B90B;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  color: #181A20;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


.header__link::after {
  content: '';
  position: absolute;
  width: 41px;
  height: 100%;
  top: 15px;
  right: -64px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(../assets/img/arrow.png);
}

@media screen and (max-width: 856px) {
  .header {
    width: 100%;
  }

  .header__title {
    font-size: 32px;
  }

  .header__text {
    font-size: 20px;
  }
}

@media screen and (max-width: 480px) {
  .header {
    height: 500px;
    padding: 20px;
  }

  .header__title {
    font-size: 20px;
  }

  .header__text {
    font-size: 16px;
  }

  .header__link::after {
    right: unset;
    top: unset;
    bottom: -62px;
  }
}
</style>