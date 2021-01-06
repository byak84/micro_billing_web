<template>
  <select v-model="tarif_id">
    <option
        v-for="(tarif, index) in tarifList"
        :key="index"
        :value="tarif.id"

    >{{ tarif.naming + ': ' + tarif.price }}
    </option>
  </select>
</template>

<script>
export default {
  name: "tarifPopUp",
  mounted() {
    this.$store.dispatch('tarifs/fetchTarifs')
        .then(() => {
          this.tarif_id = +this.tarifList[0].id;
        })
  },
  watch: {
    tarif_id(val) {
      this.$emit('tarifChange', +val);
    }
  },
  data() {
    return {
      tarif_id: 0,
    }
  },
  computed: {
    tarifList() {
      return this.$store.getters["tarifs/TARIFS"];
    }
  }
}
</script>

<style scoped>

</style>