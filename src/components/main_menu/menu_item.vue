<template>
  <router-link v-bind:to="item.href" tag="p" exact active-class="active">{{ item.title }}</router-link>
</template>

<script>
export default {
  name: "menu_item",
  props: ['item']
}
</script>

<style scoped>
p {
  margin: 0px 0px 10px 30px;
  font-family: Consolas,sans-serif;
  font-weight: bold;
  font-size: 25px;
  padding: 0;
  cursor: pointer;
}
p:hover {
  /*color: blue;*/
  background-color: #4AAE9B;
}

.active {
  color: rebeccapurple;
}

</style>