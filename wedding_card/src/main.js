import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app.use(router);

app.use(createNaverMap, {
  clientId: "vm4d53we2f",
});

app.mount("#app");
