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
    <div class="bg02 row">
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
      <div class="menu01 cursor-pointer" @click="gotoAdmin()" v-if="menu != 3">
        Admin
      </div>
      <div class="menu02" v-if="menu == 3">
        Admin
        <div class="blueline"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Number,
    },
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
