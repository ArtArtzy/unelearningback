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
    loginBtn() {
      this.$router.push("/questionmain");
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
