<template>
  <div class="main">
    <Menu />
    <div class="main-comtainer">
      <div class="left-container">
        <router-view></router-view>
      </div>
      <div class="my-info">
        111
      </div>
    </div>
  </div>
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
.main {
  background-color: #f5f5f5;
}
.main-comtainer {
  width: 1200px;
  background-color: pink;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.left-container {
  background-color: green;
  width: 850px;
  padding: 0 10px;
}
.my-info {
  background-color: blue;
  width: 350px;
  padding: 0 10px;
}
</style>
