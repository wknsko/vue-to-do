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

</style>
