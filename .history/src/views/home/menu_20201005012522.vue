<template>
  <div class="menu">
    <div class="logo">
      <img class="logo-img" src="@/assets/logo.png" />
      <span class="logo-name">机灵小不懂</span>
    </div>
    <div class="search">
      <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="1"> <mail-outlined /> 首页</a-menu-item>
        <a-menu-item key="2"> <mail-outlined /> 分类</a-menu-item>
        <a-menu-item key="3"> <mail-outlined /> 时间轴</a-menu-item>
        <a-menu-item key="4"> <mail-outlined /> 关于</a-menu-item>
      </a-menu>
      <a-input-search
        v-model:value="value"
        placeholder="点一下你试试=_="
        style="width: 200px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { MailOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    MailOutlined
  },
  data() {
    return {
      current: ["1", "2", "3", "4"]
    };
  }
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}
.logo {
  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .logo-name{
    font-size: 20px;
  }
}
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
