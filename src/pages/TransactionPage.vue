<template lang="">
  <div>Transactons is here</div>
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
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
<style lang=""></style>
