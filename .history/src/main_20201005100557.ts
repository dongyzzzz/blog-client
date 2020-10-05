import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "../router";

const app = createApp(App);
app.use(Antd);
app.use(router);
// dont write: const APP=createApp(App).use(store).use(router).mount('#app');
app.config.performance = true;

app.mount("#app");
declare const window: Window & { app: any };
window.app = app;
