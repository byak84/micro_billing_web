<template>
  <div class="main_menu">
  <menu_item v-for='item in menujson'
             :key='item.title'
             :item='item' />
  </div>
</template>

<script>
import menu_item from "@/components/main_menu/menu_item";
export default {
  name: "main_menu",
  components: {menu_item},
  data() {
    return {
      menujson: [
        {
          "title": "Клиенты",
          "href": "/clients"
        },
        {
          "title": "Платежи",
          "href": "/payments"
        },
        {
          "title": "Тарифы",
          "href": "/tarifs"
        },
        {
          "title": "Улицы",
          "href": "/streets"
        }
      ]
    }
}
}
</script>

<style scoped>
.main_menu {
  /*border: 1px blue solid;*/
  background-color: black;
  color: white;
  /*max-width: 500px;*/
  width: 250px;
  height: 100%;
  padding-top: 20px;
}
</style>