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
      transactions: [
        {
          id: 1,
          name: "Shopping",
          price: 100,
        },
        { id: 2, name: "Pay house money", price: 200 },
        { id: 3, name: "Pay internet money", price: 50 },
      ],
    };
  },
};
</script>
<style lang=""></style>
