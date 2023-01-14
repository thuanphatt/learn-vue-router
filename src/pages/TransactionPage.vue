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
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>Transaction Loading ...</div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const transactions = ref([]);
    const error = ref(null);
    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) throw new Error("Something went wrong");
        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    fetchAll();
    return { transactions, error };
  },
};
</script>
<style lang=""></style>
