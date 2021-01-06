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
      <tr class="body_row" v-for="client in clientList">
        <td>{{ client.name }}</td>
        <td>{{ client.street.name + ': ' + client.house_number }}</td>
        <td>{{ client.tarif.naming + ': ' + client.tarif.price }}</td>
        <td>{{ client.ip }}</td>
        <td>{{ client.active ? 'да' : 'нет' }}</td>
        <td>{{ client.connection_date }}</td>
        <td>{{ client.login }}</td>
        <td>{{ client.password }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "clientTable",
  date() {
    return {
      clientInfo: {
        name: '',
        street: { name: '' },
        house_number: '',
        tarif: { naming: '', price: 0 },
        ip: '',
        active: false,
        connection_date: '',
        login: '',
        password: ''
      }
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

.body_row {
  background-color: beige;
  text-align: center;
  cursor: pointer;
}

.body_row:hover {
  background-color: burlywood;
  /*text-align: center;*/
  /*cursor: pointer;*/
}

</style>