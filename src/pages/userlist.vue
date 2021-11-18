<template>
  <div>
    <menu-bar :menu="2"></menu-bar>
    user list
  </div>
</template>

<script>
import axios from "axios";
import menuBar from "../components/menu";
export default {
  components: {
    menuBar,
  },
};
</script>

<style lang="scss" scoped></style>
