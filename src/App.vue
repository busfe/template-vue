<template>
  <div id="app">
    <div class="imgWrap">
      <img src="./assets/imgs/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>
<style>
  .imgWrap {
    margin: 0 auto;
    text-align: center;
  }
</style>
