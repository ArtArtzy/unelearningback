<template>
  <div>
    <menu-bar :menu="1"></menu-bar>
    <div class="text-h4 q-pt-md" align="center">Edit question</div>
    <div class="loginBox">
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Order ID</div>
        <div style="width: 500px">
          <q-input v-model="input.orderid" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Question</div>
        <div style="width: 500px">
          <q-input v-model="input.question" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Answer#1</div>
        <div style="width: 500px">
          <q-input v-model="input.answer1" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Answer#2</div>
        <div style="width: 500px">
          <q-input v-model="input.answer2" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Answer#3</div>
        <div style="width: 500px">
          <q-input v-model="input.answer3" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Answer#4</div>
        <div style="width: 500px">
          <q-input v-model="input.answer4" />
        </div>
      </div>
      <div class="row">
        <div style="width: 200px" class="q-pt-lg">Correct Answer</div>
        <div style="width: 500px">
          <q-select v-model="input.correctAnswer" :options="answerOption" />
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
        orderid: "",
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: 1,
      },
      answerOption: [1, 2, 3, 4],
      id: this.$route.params.id,
    };
  },
  methods: {
    cancelBtn() {
      this.$router.push("/questionmain");
    },
    async saveBtn() {
      if (this.input.orderid == "") {
        this.notifyRed("Please input orderid");
        return;
      }
      if (this.input.question == "") {
        this.notifyRed("Please input question");
        return;
      }
      if (this.input.answer1 == "") {
        this.notifyRed("Please input answer#1");
        return;
      }
      if (this.input.answer2 == "") {
        this.notifyRed("Please input answer#2");
        return;
      }
      if (this.input.answer3 == "") {
        this.notifyRed("Please input answer#3");
        return;
      }
      if (this.input.answer4 == "") {
        this.notifyRed("Please input answer#4");
        return;
      }

      let data = {
        orderid: this.input.orderid,
        question: this.input.question,
        answer1: this.input.answer1,
        answer2: this.input.answer2,
        answer3: this.input.answer3,
        answer4: this.input.answer4,
        correctAnswer: this.input.correctAnswer,
        id: this.id,
      };
      let url = this.serverpath + "editquestion.php";
      let res = await axios.post(url, JSON.stringify(data));
      this.notifyGreen("Save completely");
      this.$router.push("/questionmain");
    },
    async loadQuestion() {
      let temp = {
        id: this.id,
      };

      let url = this.serverpath + "loadquestionedit.php";
      let res = await axios.post(url, JSON.stringify(temp));
      this.input.orderid = res.data[0].orderid;
      this.input.question = res.data[0].question;
      this.input.answer1 = res.data[0].answer1;
      this.input.answer2 = res.data[0].answer2;
      this.input.answer3 = res.data[0].answer3;
      this.input.answer4 = res.data[0].answer4;
      this.input.correctAnswer = res.data[0].correctAnswer;
    },
  },
  mounted() {
    this.checkToken();
    this.loadQuestion();
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  width: 700px;
  height: 400px;
  margin: auto;
}
</style>
