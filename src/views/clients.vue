<template>
  <div>
    <h2>Управление клиентами</h2>
    <client-menu />
    <client-table />

  </div>
</template>

<script>
import ClientTable from "@/components/clients/clientTable";
import ClientMenu from "@/components/clients/clientMenu"
export default {
  name: "clients",
  components: {ClientTable, ClientMenu}
}
</script>

<style scoped>

</style>