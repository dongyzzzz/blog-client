<template>
  <Menu />
  <div class="left-container">
    <router-view></router-view>
  </div>
  <div class="main-comtainer"></div>
</template>

<script lang="ts">
import Menu from "./home/menu.vue";
export default {
  components: {
    Menu
  }
};
</script>

<style lang="less" scoped>
.main-comtainer {
  width: 1200px;
  background-color: pink;
  margin: auto;
  display: flex;
  flex-direction: row;
}
</style>
