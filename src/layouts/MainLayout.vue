<template>
  <div class="header">
  <nav-bar />

<!--    <router-view />-->
  </div>
</template>

<script>
import navBar from "@/components/main_menu/main_menu";
export default {
  components: {navBar}
}

</script>

<style scoped>
.header {
  margin: 0px 0px 10px;
  padding: 0;
  height: 100%;
  display: flex;
  /*border: 2px crimson solid;*/
}

</style>