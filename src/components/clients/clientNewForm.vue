<template>
  <div class="container">
    <form>
      <table border="0" cellpadding="1" cellspacing="1">
        <tr>
          <td colspan="3" class="ctrl_td">
            <input class="form_input" placeholder="Имя" type="text" name="clientName" v-model="formData.name"
                   ref="clientName">
          </td>
        </tr>
        <tr>
          <td width="80%" colspan="2" class="ctrl_td">
            <streets-pop-up class="form_input" @streetChange="streetChange" :street_id_prop="formData.street.id"/>
            <!--            <streets-pop-up class="form_input" @streetChange="streetChange" />-->
          </td>
          <td class="ctrl_td">
            <input class="form_input" placeholder="Номер" type="text" v-model="formData.house_number">
          </td>
        </tr>
        <tr>
          <td class="ctrl_td">
            <tarif-pop-up class="form_input" @tarifChange="tarifChange" :tarif_id_prop="formData.tarif.id"/>
          </td>
          <td class="ctrl_td">
            <input class="form_input" placeholder="IP адрес" type="text" v-model="formData.ip">
          </td>
          <td colspan="1" class="ctrl_td">
            <input type="checkbox" v-model="formData.active" id="active"> <label for="active">Активен</label>
          </td>
        </tr>
        <tr>
          <td width="33%" class="ctrl_td"><input class="form_input" type="date" v-model="formData.connection_date"></td>
          <td width="33%" class="ctrl_td"><input class="form_input" type="text" placeholder="Логин"
                                                 v-model="formData.login">
          </td>
          <td width="34%" class="ctrl_td"><input class="form_input" type="text" placeholder="Пароль"
                                                 v-model="formData.password">
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import streetsPopUp from "@/components/streets/streetsPopUp";
import tarifPopUp from "@/components/tarifs/tarifPopUp";

export default {
  name: "clientNewForm",
  props: {
    editFormData: Object
  },
  components: {tarifPopUp, streetsPopUp},
  data() {
    return {
      formData: {
        name: '',
        street: {
          id: 0,
        },
        house_number: '',
        tarif: {
          id: 0,
        },
        ip: '',
        active: true,
        connection_date: '',
        login: '',
        password: ''
      }
    }
  },
  watch: {
    formData: {
      handler() {
        this.$emit('dataChanged', this.formData)
      },
      deep: true
    },

  },
  methods: {
    streetChange(street_id) {
      this.formData.street.id = street_id
    },
    tarifChange(tarif_id) {
      this.formData.tarif.id = tarif_id
    },
  },
  mounted() {
    this.$refs.clientName.focus()
    if (this.editFormData.id) {
      this.formData = {...this.editFormData}
    }
  }
}
</script>

<style scoped>

.container {
  display: block;
  margin: 0px;
  padding: 0px;
}

table {
  width: 100%;
}

.form_label {
  position: absolute;
  top: 0;
  /*z-index: -1;*/
  color: #be6262;
  transition: 0.3s;
}

.form_input {
  width: 100%;
  height: 30px;
  border: 1px solid white;
  background: transparent;
}

.ctrl_td {
  background: white;
  border: 1px solid gainsboro;
}

.form_input:focus {
  border-bottom: 1px solid #1a73a8;
}

.form_input:focus ~ .form_label {
  top: -18px;
  font-size: 12px;
  color: #e0e0e0;
}


</style>