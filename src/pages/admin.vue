<template>
  <div>
    <menu-bar :menu="3"></menu-bar>
    <div class="text-h4 q-pt-md" align="center">Admin</div>
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
