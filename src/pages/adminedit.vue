<template>
  <div>
    <menu-bar :menu="3"></menu-bar>
      <div class="text-h4 q-pt-md " align="center">Edit admin</div>
      <div class="loginBox">
        <div class="row">
          <div style="width:120px;" class="q-pt-sm">Username</div>
          <div style="width:300px;"><q-input v-model="input.username" dense /></div>
        </div>
         <div class="row">
          <div style="width:120px;" class="q-pt-sm">Password</div>
          <div style="width:300px;"><q-input v-model="input.password" dense /></div>
        </div>
         <div class="row">
          <div style="width:120px;" class="q-pt-sm">Admin</div>
          <div style="width:300px;"><q-select v-model="input.admin" :options="adminOption" emit-value map-options dense /></div>
        </div>
        <div class="row q-pt-md justify-center">
          <div><q-btn color="white" text-color="black" label="Cancel" style="width: 120px;" @click="cancelBtn()" /></div>
          <div style="width:25px;"></div>
          <div><q-btn color="primary" label="Save" style="width: 120px;" @click="saveBtn()" /></div>
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
      id: this.$route.params.id,
      input: {
        username: '',
        password: '',
        admin: 0
      },
      adminOption:[{
        label:'No',
        value: 0
      }, {
        label:'Yes',
        value:1
      }]
    }
  },
  methods: {
    cancelBtn() {
      this.$router.push("/admin")
    },
    async saveBtn(){
      if(this.input.username =='' || this.input.password == ''){
        this.notifyRed("Please input username / password")
        return
      } else {
        let data = {
          username : this.input.username,
          password: this.input.password,
          admin : this.input.admin,
          id:this.id
        }
        let url = this.serverpath + "editadmin.php";
        let res = await axios.post(url, JSON.stringify(data));
        this.notifyGreen("Save completely");
        this.$router.push("/admin")
      }
    },
    async loadData(){
      let temp = {
        id: this.id
      }

      let url = this.serverpath + "loadadminedit.php";
      let res = await axios.post(url, JSON.stringify(temp));
      this.input.username = res.data[0].username
      this.input.password = res.data[0].password
      this.input.admin = Number(res.data[0].adminmode)
    }
  },
  mounted () {
      this.checkToken();
      this.checkAdmin();
    this.loadData()
   
  },
};
</script>

<style lang="scss" scoped>
.loginBox{
  width: 420px;
  height: 400px;
  margin: auto;
}
</style>
