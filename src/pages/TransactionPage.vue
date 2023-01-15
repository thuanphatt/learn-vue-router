<template lang="">
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <p>Price: {{ transaction.price }}</p>
    </div>
  </div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>Transaction Loading ...</div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTransaction");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { transactions, error };
  },
};
</script>
<style lang=""></style>
