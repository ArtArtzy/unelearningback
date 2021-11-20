<template>
  <div>
    <menu-bar :menu="3"></menu-bar>
    <div class="row">
      <div class="col-2"></div>
      <div class="text-h4 q-pt-md col-8" align="center">Admin</div>
      <div class="col-2 q-pt-md">
        <q-btn
          label="Add"
          color="primary"
          style="width: 120px"
          @click="addAdmin()"
        />
      </div>
    </div>
    <div class="q-pa-md">
      <q-table :data="data" :columns="columns" :pagination.sync="pagination">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td align="center">{{ props.row.username }}</q-td>
            <q-td align="center">{{ props.row.password }}</q-td>
            <q-td align="left"
              ><div>{{ props.row.adminmode == 1 ? "Yes" : "No" }}</div>
            </q-td>
            <q-td align="center"
              ><span class="cursor-pointer" @click="deleteBtn(props.row.id)"
                ><u>Delete</u></span
              ></q-td
            >
            <q-td align="center">
              <span class="cursor-pointer" @click="editBtn(props.row.id)"
                ><u>Edit</u></span
              >
            </q-td>
          </q-tr>
        </template>
      </q-table>
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
      pagination: {
        rowsPerPage: 0,
      },
      columns: [
        {
          name: "username",
          label: "Username",
          align: "center",
          style: "width:100px",
        },
        {
          name: "password",
          label: "Password",
          align: "center",
          style: "width:100px",
        },
        {
          name: "admin",
          label: "Admin",
          align: "left",
        },
        {
          name: "delete",
          label: "Delete",
          align: "center",
        },
        {
          name: "edit",
          label: "Edit",
          align: "center",
        },
      ],
      data: [],
    };
  },
  methods: {
    addAdmin() {
      this.$router.push("adminadd");
    },
    async loadData() {
      this.data = [];
      let url = this.serverpath + "loadadmin.php";
      let res = await axios.get(url);
      this.data = res.data;
    },
    deleteBtn(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this user?",
          cancel: true,
          persistent: true,
        })
        .onOk(async () => {
          let temp = {
            id: id,
          };
          let url = this.serverpath + "deleteadmin.php";
          let res = await axios.post(url, JSON.stringify(temp));
          this.loadData();
        });
    },
    editBtn(id) {
      this.$router.push("/adminedit/" + id);
    },
  },
  mounted() {
    this.checkToken();
    this.checkAdmin();
    this.loadData();
  },
};
</script>

<style lang="scss" scoped></style>
