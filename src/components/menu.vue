<template>
  <div>
    <div class="bg01 row">
      <div>
        <img
          src="../../public/logo.png"
          style="height: 60px; padding-top: 10px; padding-left: 10px"
          alt=""
        />
      </div>
      <div class="vl"></div>
      <div class="t1">Trade and the sustainable development goals (SDGs)</div>
    </div>
    <div class="bg02 row justify-between">
      <div class="row">
        <div class="menu01 cursor-pointer" v-if="menu != 1" @click="gotoExam()">
          Exam
        </div>
        <div class="menu02" v-if="menu == 1">
          Exam
          <div class="blueline"></div>
        </div>
        <div class="menu01 cursor-pointer" @click="gotoUser()" v-if="menu != 2">
          User
        </div>
        <div class="menu02" v-if="menu == 2">
          User
          <div class="blueline"></div>
        </div>
        <div
          class="menu01 cursor-pointer"
          @click="gotoAdmin()"
          v-if="menu != 3 && adminShow"
        >
          Admin
        </div>
        <div class="menu02" v-if="menu == 3 && adminShow">
          Admin
          <div class="blueline"></div>
        </div>
      </div>

      <div class="row">
        <div
          class="menu01 cursor-pointer"
          v-if="menu != 4"
          @click="profileBtn()"
        >
          <u>{{ username }}</u>
        </div>
        <div class="menu02" v-if="menu == 4">
          {{ username }}
          <div class="blueline"></div>
        </div>
        <div>
          <q-icon
            name="fas fa-sign-out-alt"
            color="white"
            size="21px"
            class="q-pt-sm q-pr-md cursor-pointer"
            @click="logoutBtn()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    menu: {
      type: Number,
    },
  },
  data() {
    return {
      adminShow: false,
      username: this.$q.localStorage.getItem("username"),
    };
  },
  methods: {
    gotoExam() {
      this.$router.push("questionmain");
    },
    gotoUser() {
      this.$router.push("userlist");
    },
    gotoAdmin() {
      this.$router.push("admin");
    },
    logoutBtn() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to log out?",
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          this.$q.localStorage.clear();
          this.$router.push("/");
        });
    },
    profileBtn() {
      this.$router.push("profile");
    },
    async loadMenu() {
      let value = this.$q.localStorage.getItem("token");
      let temp = {
        token: value,
      };
      let url = this.serverpath + "loadmenu.php";
      let res = await axios.post(url, JSON.stringify(temp));
      if (res.data == "logout") {
        this.$router.push("/");
      } else if (res.data == "adminmode") {
        this.adminShow = true;
      }
    },
  },
  mounted() {
    this.loadMenu();
  },
};
</script>

<style lang="scss" scoped>
.bg01 {
  background-color: #1f2b35;
  height: 70px;
  width: 100%;
}
.vl {
  height: 60px;
  width: 3px;
  background-color: white;
  margin-left: 20px;
  margin-top: 5px;
}
.t1 {
  font-size: 30px;
  color: white;
  padding-top: 12px;
  padding-left: 20px;
}
.bg02 {
  background-color: #33383d;
  height: 40px;
}
.menu01 {
  width: 80px;
  text-align: center;
  color: #b5b5b5;
  padding-top: 5px;
}
.menu02 {
  width: 80px;
  text-align: center;
  color: #5aadff;
  padding-top: 5px;
}
.blueline {
  height: 3px;
  background-color: #5aadff;
}
</style>
