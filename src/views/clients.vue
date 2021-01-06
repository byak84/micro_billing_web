<template>
  <div>
    <h2>Управление клиентами</h2>
    <client-menu
        v-on:add="showModal"
    />
    <client-table/>
    <modal-view
        v-if="isModalVisible"
        v-on:close="closeModal"
        title="Новый пользователь"
    >

        <client-new-form slot="body" @close="closeModal" />

    </modal-view>

  </div>
</template>

<script>
import clientTable from "@/components/clients/clientTable";
import clientMenu from "@/components/clients/clientMenu"
import modalView from "@/components/modalView";
import clientNewForm from "@/components/clients/clientNewForm";

export default {
  name: "clients",
  components: {clientTable, clientMenu, modalView, clientNewForm},
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {

    showModal() {
      this.isModalVisible = true;
    },

    closeModal(result) {
      this.isModalVisible = false;
      console.log(result)
    }
  }
}
</script>

<style scoped>

</style>