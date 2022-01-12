<template>
  <div>
    <menu-bar :menu="2"></menu-bar>
    <div class="text-h4 q-py-md" align="center">User List</div>
    <q-table :data="data" :columns="columns" :pagination.sync="pagination">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td align="center"
            ><span>{{ props.row.username }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.email }}</span></q-td
          >
          <q-td align="center"
            ><span
              >{{ props.row.firstname }} {{ props.row.lastname }}</span
            ></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.gender }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.country }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.organization }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.jobtitle }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.score }}</span></q-td
          >
          <q-td align="center"
            ><span>{{ props.row.complete == 1 ? "Yes" : "No" }}</span></q-td
          >
        </q-tr>
      </template>
    </q-table>
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
        rowsPerPage: 50,
      },
      columns: [
        {
          name: "username",
          label: "Username",
          align: "center",
          style: "width:100px",
        },
        {
          name: "email",
          label: "Email",
          align: "center",
          style: "width:100px",
        },
        {
          name: "name",
          label: "Name",
          align: "center",
        },
        {
          name: "gender",
          label: "Gender",
          align: "center",
        },
        {
          name: "country",
          label: "Country",
          align: "center",
        },
        {
          name: "organization",
          label: "Organization",
          align: "center",
        },
        {
          name: "jobtitle",
          label: "Job title",
          align: "center",
        },
        {
          name: "score",
          label: "Score",
          align: "center",
        },
        {
          name: "Complete",
          label: "Complete",
          align: "center",
        },
      ],
      data: [],
    };
  },
  methods: {
    async loadData() {
      let url = this.serverpath + "loaduserlist.php";
      let res = await axios.get(url);
      this.data = res.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped></style>
