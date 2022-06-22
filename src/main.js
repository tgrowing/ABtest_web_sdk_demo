/* eslint-disable */
// Library
import Vue from "vue";
import router from "./router/index";
// Page & Component
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css';

Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);

export default new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
