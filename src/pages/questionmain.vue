<template>
  <div>
    <menu-bar :menu="1"></menu-bar>
    <div class="row">
      <div class="col-2"></div>
      <div class="text-h4 q-pt-md col-8" align="center">Question List</div>
      <div class="col-2 q-pt-md">
        <q-btn
          label="Add"
          color="primary"
          style="width: 120px"
          @click="addQuestion()"
        />
      </div>
    </div>
    <div class="q-pa-md">
      <q-table :data="data" :columns="columns" :pagination.sync="pagination">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td align="center"
              ><span class="font16">{{ props.row.no }}</span></q-td
            >
            <q-td align="center"
              ><span class="font16">{{ props.row.orderid }}</span></q-td
            >
            <q-td align="left"
              ><div class="font16">{{ props.row.question }}</div>
              <div
                :class="[props.row.correctAnswer == 1 ? 'text-green' : '']"
                class="font16"
              >
                a. {{ props.row.answer1 }}
              </div>
              <div
                :class="[props.row.correctAnswer == 2 ? 'text-green' : '']"
                class="font16"
              >
                b. {{ props.row.answer2 }}
              </div>
              <div
                :class="[props.row.correctAnswer == 3 ? 'text-green' : '']"
                class="font16"
              >
                c. {{ props.row.answer3 }}
              </div>
              <div
                :class="[props.row.correctAnswer == 4 ? 'text-green' : '']"
                class="font16"
              >
                d. {{ props.row.answer4 }}
              </div>
            </q-td>
            <q-td align="center"
              ><span
                class="cursor-pointer font16"
                @click="deleteBtn(props.row.id)"
                ><u>delete</u></span
              ></q-td
            >
            <q-td align="center">
              <span class="cursor-pointer font16" @click="editBtn(props.row.id)"
                ><u>edit</u></span
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
          name: "no",
          label: "No.",
          align: "center",
          style: "width:100px",
        },
        {
          name: "order",
          label: "Order",
          align: "center",
          style: "width:100px",
        },
        {
          name: "questionAnswer",
          label: "Question-answer",
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
    deleteBtn(id) {
      console.log(id);
    },
    editBtn(id) {
      this.$router.push("questionedit/" + id);
    },
    addQuestion() {
      this.$router.push("questionnew");
    },
    async loadQuestion() {
      let url = this.serverpath + "loadquestion.php";
      let res = await axios.get(url);
      this.data = res.data;
    },
  },
  mounted() {
    this.checkToken();
    this.loadQuestion();
  },
};
</script>

<style lang="scss" scoped></style>
