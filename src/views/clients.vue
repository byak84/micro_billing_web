<template>
  <div>
    <h2>Управление клиентами</h2>
    <client-menu
        v-on:add="showModalNew"
    />
    <client-table/>
    <modal-view
        v-if="isModalNewVisible"
        v-on:close="closeModalNew"
        title="Новый пользователь"
    >

      <client-new-form slot="body" @close="closeModalNew" @dataChanged="dataChanged" :edit-form-data="formData" />
      <div slot="footer">
        <input type="button"
        class="btn btn-green"
        value="Создать"
        />

        <input type="button"
               class="btn-green ml10"
               @click="closeModalNew"
               value="Закрыть"
        />
      </div>

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
      isModalNewVisible: false,
      formData: {
        clientName: 'Ivan',
        street_id: 1
      },
    }
  },
  methods: {
    dataChanged(formData) {
      this.formData = formData
    },
    showModalNew() {
      this.isModalNewVisible = true
    },
    closeModalNew(result) {
      this.isModalNewVisible = false
      console.log(result)
    }
  }
}
</script>

<style scoped>

</style>