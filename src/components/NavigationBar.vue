<template lang="">
  <nav class="nav">
    <router-link :to="{ name: 'overview-route' }">Overview</router-link>
    <router-link :to="{ name: 'transaction-route' }">Transactions</router-link>
    <router-link to="/">Budgets</router-link>
    <router-link to="/">Reports</router-link>
    <router-link to="/">Settings</router-link>
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
