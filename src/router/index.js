import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
import axios from "axios";
Vue.mixin({
  data() {
    return {
      serverpath: "http://localhost/unsdgs/",
    };
  },
  methods: {
    notifyGreen(message) {
      this.$q.notify({
        message: message,
        color: "green",
        position: "top",
        timeout: "2500",
      });
    },
    notifyRed(message) {
      this.$q.notify({
        message: message,
        color: "red",
        position: "top",
        timeout: "2500",
      });
    },
    async checkToken() {
      let value = this.$q.localStorage.getItem("token");
      let temp = {
        token: value,
      };
      let url = this.serverpath + "checktoken.php";
      let res = await axios.post(url, JSON.stringify(temp));
      if (res.data == "logout") {
        this.$router.push("/");
      }
    },
    async checkAdmin() {
      let value = this.$q.localStorage.getItem("token");
      let temp = {
        token: value,
      };
      let url = this.serverpath + "loadmenu.php";
      let res2 = await axios.post(url, JSON.stringify(temp));
      if (res2.data != "adminmode") {
        this.$router.push("/");
      }
    },
  },
});
