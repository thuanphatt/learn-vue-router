<template lang="">
  <h1>Overview page is here</h1>
  <button @click="diy.setCount">Click</button>
</template>
<script>
export default {
  inject: ["diy"],
  created() {
    // console.log(diy);
  },
};
</script>
<style lang=""></style>
