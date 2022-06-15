<template>
  <div class="home">
    <div class="home__cover"></div>
    <div class="home__line"></div>
  </div>
   <router-view></router-view>
</template>
<script>
</script>
<style>
.home {
  background-image: url('./assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: absolute;

}

.home__cover {
  position: absolute;
  width: inherit;
  height: inherit;
  background: linear-gradient(90deg, rgb(108 107 107) 0%, rgba(23, 23, 23, 1) 71%);
  opacity: 0.7;
}

.home__line {
  background-image: url('./assets/img/Layer.png');
  background-position: center;
  width: 100px;
  height: inherit;
  opacity: 0.1;
  position: absolute;
  right: 20px;
}
</style>