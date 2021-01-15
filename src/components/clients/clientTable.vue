<template>
  <div>
<!--    <p>Таблица</p>-->
    <table>
      <tr class="head_row">
        <th width="200px">Имя</th>
        <th width="200px">Адрес</th>
        <th width="120px">Тариф</th>
        <th width="120px">IP</th>
        <th width="90px">Активен</th>
        <th width="160px">Дата подключения</th>
        <th width="80px">Логин</th>
        <th width="150px">Пароль</th>
      </tr>

      <client-table-row v-for="client in clientList" :row-data="client" @clickOnRow="editClient" />

    </table>
  </div>
</template>

<script>
import clientTableRow from "@/components/clients/clientTableRow";
export default {
  name: "clientTable",
  components: {clientTableRow},
  date() {
    return {
    }
  },
  methods: {
    editClient(rowData) {
      // console.log(event)
      this.$emit('editClick', rowData)
    }
  },
  computed: {
    clientList() {
      return this.$store.getters["clients/CLIENTS"];
    }
  },
  created() {
    this.$store.dispatch('clients/fetchClients')
  }
}
</script>

<style scoped>

.head_row {
  background-color: darkgrey;
}

/*.body_row {*/
/*  background-color: beige;*/
/*  text-align: center;*/
/*  cursor: pointer;*/
/*}*/

/*.body_row:hover {*/
/*  background-color: burlywood;*/
/*  text-align: center;*/
/*  cursor: pointer;*/
/*}*/

</style>