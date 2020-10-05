<template>
  <div id="app">
    <Menu />
    <Index />
  </div>
</template>

<script lang="ts">
import Menu from "./views/home/menu.vue";
import Index from "./views/index.vue";
export default {
  components: {
    Menu,
    Index
  }
};
</script>

<style>
#app {
  background-color: #f5f5f5;
}
</style>
