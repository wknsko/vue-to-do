<template>

  <TheHead />
  <TheBody />
</template>

<script>
import TheBody from "./components/TheBody.vue";
import TheHead from "./components/TheHead.vue";
import { ref, inject, provide } from "vue";

export default {
  setup() {
    let notes = inject('notes');
    let active = ref(notes.filter(el => el.type === 'Active').length);
    provide('active', active)

    return {
      active,
      notes
    }
  },
  components: {
    TheBody,
    TheHead
}
}

</script>

<style>
.card {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 20px
}

.btn-add {
  margin-top: 20px;
  background-color: #e5ebae;
  color: rgb(48, 51, 62);
}

.btn-add:hover {
  background-color: #efffad;
}
</style>
