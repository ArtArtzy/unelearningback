<template>
  <div>
    <div class="loginbox absolute-center">
      <div class="text-h4 q-pt-md" align="center">Control panel</div>
      <div class="row q-px-xl">
        <div class="col-4 q-pt-md" align="center">Username</div>
        <div class="col-8"><q-input v-model="input.username" dense /></div>
      </div>
      <div class="row q-px-xl">
        <div class="col-4 q-pt-md" align="center">password</div>
        <div class="col-8">
          <q-input v-model="input.password" dense type="password" />
        </div>
      </div>
      <div align="center" class="q-pt-md">
        <q-btn
          color="primary"
          label="Log in"
          no-caps
          style="width: 150px"
          @click="loginBtn()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginBtn() {
      let temp = {
        username: this.input.username,
        password: this.input.password,
      };
      let url = this.serverpath + "checklogin.php";
      let res = await axios.post(url, JSON.stringify(temp));
      if (res.data != false) {
        this.$q.localStorage.set("token", res.data);
        this.$q.localStorage.set("username", this.input.username);
        this.$router.push("/questionmain");
      } else {
        this.notifyRed("username / password incorrect");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginbox {
  width: 400px;
  height: 220px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
