import Vue from "vue";
import VueRouter from "vue-router";
import TestA from "../pages/A";
import TestB from "../pages/B";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  base: "/",
  routes: [
    { path: "/a", component: TestA },
    { path: "/b", component: TestB },
  ],
});
