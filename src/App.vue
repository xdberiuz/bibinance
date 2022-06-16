<template>
  <div class="home__cover"></div>
  <div class="home__line"></div>
  <nav style="position: absolute;
    z-index: 100;">
    <router-link to="/bibinance/">action</router-link>
    <router-link to="/step_1">details</router-link>
  </nav>
  <router-view></router-view>
</template>
<script>
</script>
<style>
#app {
  background-image: url('./assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  padding: 30px;

}

.home__cover {
  position: absolute;
  width: inherit;
  height: inherit;
  background: linear-gradient(90deg, rgb(108 107 107) 0%, rgba(23, 23, 23, 1) 71%);
  opacity: 0.7;
  top: 0;
  left: 0;
}

.home__line {
  background-image: url('./assets/img/Layer.png');
  background-position: center;
  width: 100px;
  /* background-repeat: no-repeat; */
  height: 100%;
  opacity: 0.1;
  position: absolute;
  right: 20px;
  top: 0;
}

@media screen and (max-width: 540px) {
  #app {
    padding: 0;
  }
}
</style>