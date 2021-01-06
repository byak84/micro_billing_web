<template>
  <div>
    <span class="menu_item" @click="addNew">Добавить</span>
  </div>
</template>

<script>
export default {
  name: "clientMenu",
  methods: {
    addNew() {
      this.$emit('add');
    }
  }
}
</script>

<style scoped>

.menu_item {
  color: blue;
  cursor: pointer;
}

</style>