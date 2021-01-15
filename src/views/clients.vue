<template>
  <div>
    <h2>Управление клиентами</h2>
    <client-menu
        v-on:add="showModalNew"
    />
    <client-table @editClick="editClick" />

    <modal-view
        v-if="isModalNewVisible"
        v-on:close="closeModalNew"
        title="Новый пользователь"
    >

      <client-new-form slot="body" @close="closeModalNew" @dataChanged="dataChanged" :edit-form-data="formData"/>

      <div slot="footer" class="footer">

        <input type="button"
               class="btn btn-green"
               value="Создать"
               @click="addNewClient"
        />

        <input type="button"
               class="btn-green ml10"
               value="Закрыть"
               @click="closeModalNew"
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
      formData: {},
    }
  },
  methods: {
    editClick(rowData) {
      this.formData = rowData
      this.showModalNew()
    },
    dataChanged(formData) {
      this.formData = formData
    },
    showModalNew() {
      this.isModalNewVisible = true
    },
    addNewClient() {
      this.isModalNewVisible = false
      console.log(this.formData)
      this.formData = {}
    },
    closeModalNew() {
      this.isModalNewVisible = false
      this.formData = {}
    },
  }
}
</script>

<style scoped>
.footer {
  margin: 0 auto;
  padding-bottom: 20px;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
  margin-top: 20px;
  width: 150px;
}

.ml10 {
  margin-left: 10px;
}
</style>