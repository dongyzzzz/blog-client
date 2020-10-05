<template>
  <div>
    <div class="menu">
      <img src="@/assets/logo.png" />
      <span>机灵小不懂</span>
    </div>
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
}
</style>
