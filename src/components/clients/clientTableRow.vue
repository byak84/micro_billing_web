<template>
  <tr class="body_row" @click="clickHandler">
    <td>{{ rowData.name }}</td>
    <td>{{ rowData.street.name + ': ' + rowData.house_number }}</td>
    <td>{{ rowData.tarif.naming + ': ' + rowData.tarif.price }}</td>
    <td>{{ rowData.ip }}</td>
    <td>{{ rowData.active ? 'да' : 'нет' }}</td>
    <td>{{ rowData.connection_date }}</td>
    <td>{{ rowData.login }}</td>
    <td>{{ rowData.password }}</td>
  </tr>
</template>

<script>
export default {
  name: "clientTableRow",
  props: {
    rowData: Object
  },
  methods: {
    clickHandler() {
      this.$emit('clickOnRow', this.rowData)
    }
  }
}
</script>

<style scoped>
.body_row {
  background-color: beige;
  text-align: center;
  cursor: pointer;
}

.body_row:hover {
  background-color: burlywood;
}

</style>