<template>
  <div class="modal-backdrop">
    <div class="modal">

      <header class="modal-header">
        <slot name="header">
          <h3>{{ title }}</h3>
          <span class="btn-close" @click="$emit('close')">x</span>
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body"></slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>

    </div>
  </div>
</template>

<script>
export default {
  name: "modalView",
  props: ['title'],
}
</script>

<style scoped>
h3 {
  padding-left: 20px;
  margin: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-footer {
  /*padding: 15px;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  display: flex;

}

.modal-header {
  height: 50px;
  color: #ffffff;
  background-color: #000000;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding-right: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #ff006b;
  background: transparent;
}

</style>