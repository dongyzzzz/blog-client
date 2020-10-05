<template>
  <Menu />
  <div class="main-comtainer">
    1 111
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
.main-comtainer {
  width: 1200px;
  background-color: pink;
  margin: auto;
  display: flex;
  flex-direction: row;
}
</style>
