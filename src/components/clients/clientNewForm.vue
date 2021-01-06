<template>
  <div class="container">
    <form @submit.prevent="submitHandler">
      <table border="0" cellpadding="1" cellspacing="1">
        <tr>
          <td colspan="3" class="ctrl_td">
            <input class="form_input" placeholder="Имя" type="text" name="clientName" v-model="clientName" id="clientName" autofocus>
          </td>
        </tr>
        <tr>
          <td width="80%" colspan="2" class="ctrl_td">
            <streets-pop-up class="form_input" @streetChange="streetChange"/>
          </td>
          <td  class="ctrl_td">
            <input class="form_input" placeholder="Номер" type="text">
          </td>
        </tr>
        <tr>
          <td class="ctrl_td">
            <tarif-pop-up class="form_input" @tarifChange="tarifChange" />
<!--            <select class="form_input">-->
<!--              <option>Базовый</option>-->
<!--            </select>-->
          </td>
          <td class="ctrl_td">
            <input class="form_input" placeholder="IP адрес" type="text">
          </td>
          <td colspan="1" class="ctrl_td">
            <input type="checkbox" checked> Активен
          </td>
        </tr>
        <tr>
          <td width="33%" class="ctrl_td"><input class="form_input" type="date"></td>
          <td width="33%" class="ctrl_td"><input class="form_input" type="text" placeholder="Логин"></td>
          <td width="34%" class="ctrl_td"><input class="form_input" type="text" placeholder="Пароль"></td>
        </tr>
        <tr>
          <td colspan="3" align="center">
            <input type="submit"
                   class="btn-green"
                   value="Создать"
            />

            <input type="button"
                   class="btn-green ml10"
                   @click="close"
                   value="Закрыть"
            />

          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import streetsPopUp from "@/components/streets/streetsPopUp";
import TarifPopUp from "@/components/tarifs/tarifPopUp";

export default {
  name: "clientNewForm",
  components: {TarifPopUp, streetsPopUp},
  data() {
    return {
      clientName: '',
      street_id: 0,
      tarif_id: 0,
    }
  },
  methods: {
    streetChange(street_id) {
      this.street_id = street_id;
    },

    tarifChange(tarif_id) {
      this.tarif_id = tarif_id;
    },

    submitHandler() {
      this.$emit('close', 1);
    },

    close() {
      this.$emit('close', null);
    }
  },
  mounted() {
    let clientName = document.getElementById('clientName')
    clientName.focus()
  }
}
</script>

<style scoped>

.container {
  display: block;
  margin: 0;
  padding: 0;
}

table {
  width: 100%;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
  margin-top: 20px;
  width: 150px;
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
  /*border: 1px solid gainsboro;*/
  border: 1px solid white;
  background: transparent;
  /*background: #eeeeee;*/
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

.ml10 {
  margin-left: 10px;
}

</style>