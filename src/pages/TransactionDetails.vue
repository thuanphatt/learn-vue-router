<template lang="">
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading {{ $route.params.id }} ...</div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchTraction", { id: route.params.id });
    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
<style lang=""></style>
