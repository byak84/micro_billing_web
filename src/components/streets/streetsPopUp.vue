<template>
  <select v-model="street_id">
    <option
        v-for="(street, index) in streetList"
        :key="index"
        :value="street.id"

    >{{ street.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "streetsPopUp",
  props: {
    street_id_prop: {
      type: Number
    },
  },
  mounted() {
    this.$store.dispatch('streets/fetchStreets')
        .then(() => {
          if (this.street_id_prop) {
            this.street_id = this.street_id_prop
          } else {
            this.street_id = this.streetList[0].id;
          }
        })
  },
  methods: {},
  watch: {
    street_id(val) {
      // console.log(val)
      this.$emit('streetChange', val);
    }
  },
  data() {
    return {
      street_id: 0,
    }
  },
  computed: {
    streetList() {
      return this.$store.getters["streets/STREETS"];
    }
  }
}
</script>

<style scoped>

</style>