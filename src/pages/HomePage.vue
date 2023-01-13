<template lang="">
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>
<script>
import { reactive, computed, ref, watch } from "vue";
export default {
  setup() {
    const searchText = ref("");
    const customers = reactive(["Phat", "Truong", "Minh"]);
    const customersFilled = computed(() =>
      customers.filter((customer) => customer.includes(searchText.value))
    );
    watch(searchText, (newValue, oldValue) => {
      console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
    });
    return {
      searchText,
      customersFilled,
      watch,
    };
  },
};
</script>
<style lang=""></style>
