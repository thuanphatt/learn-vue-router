<template lang="">
  <h1>Overview page is here</h1>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log(this.$store.state.count);
    this.count = this.$store.state.count;
  },
};
</script>
<style lang=""></style>
