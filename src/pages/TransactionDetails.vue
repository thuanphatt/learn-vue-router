<template lang="">
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading {{ $route.params.id }} ...</div>
</template>
<script>
export default {
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
    transactionFilter() {
      return this.$store.getters.transactionFilterd;
    },
  },
  created() {
    this.$store.dispatch("fetchTraction", {
      id: this.$route.params.id,
    });
  },
};
</script>
<style lang=""></style>
