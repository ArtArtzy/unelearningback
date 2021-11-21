<template>
  <div>
    <menu-bar :menu="4"></menu-bar>
    <div class="text-h4 q-pt-md" align="center">Profile</div>
    <div class="loginBox">
      <div class="row q-pt-md">
        <div style="width: 250px">Username:</div>
        <div style="width: 300px">
          {{ input.username }}
        </div>
      </div>
      <div class="row">
        <div style="width: 250px" class="q-pt-sm">Old password:</div>
        <div style="width: 300px">
          <q-input v-model="input.oldPassword" type="password" dense />
        </div>
      </div>
      <div class="row">
        <div style="width: 250px" class="q-pt-sm">New password:</div>
        <div style="width: 300px">
          <q-input v-model="input.newPassword1" type="password" dense />
        </div>
      </div>
      <div class="row">
        <div style="width: 250px" class="q-pt-sm">Confirm new password:</div>
        <div style="width: 300px">
          <q-input v-model="input.newPassword2" type="password" dense />
        </div>
      </div>
      <div class="row q-pt-md justify-center">
        <div>
          <q-btn
            color="white"
            text-color="black"
            label="Cancel"
            style="width: 120px"
            @click="cancelBtn()"
          />
        </div>
        <div style="width: 25px"></div>
        <div>
          <q-btn
            color="primary"
            label="Save"
            style="width: 120px"
            @click="saveBtn()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import menuBar from "../components/menu";
export default {
  components: {
    menuBar,
  },
  data() {
    return {
      input: {
        username: this.$q.localStorage.getItem("username"),
        oldPassword: "",
        newPassword1: "",
        newPassword2: "",
      },
    };
  },
  methods: {
    cancelBtn() {
      this.$router.push("/questionmain");
    },
    async saveBtn() {
      if (
        this.input.oldPassword == "" ||
        this.input.newPassword1 == "" ||
        this.input.newPassword2 == ""
      ) {
        this.notifyRed("Please input all fields!");
        return;
      }
      if (this.input.newPassword1 != this.input.newPassword2) {
        this.notifyRed("New password doesn't match the confirm password!");
        return;
      }
      let temp = {
        token: this.$q.localStorage.getItem("token"),
        oldPassword: this.input.oldPassword,
        newPassword: this.input.newPassword1,
      };
      let url = this.serverpath + "editprofile.php";
      let res = await axios.post(url, JSON.stringify(temp));
      if (res.data == "password incorrect!") {
        this.notifyRed("Old Password incorrect!");
      } else {
        this.notifyGreen("Save completely");
        this.$router.push("/questionmain");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 550px;
  height: 400px;
  margin: auto;
}
</style>
