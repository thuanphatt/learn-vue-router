<template lang="">
  <p>{{ fullName }}</p>
  <button @click="onChangeSomeThing">Click me!!!</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const fullName = ref("Thuan Phat");
    function onChangeSomeThing() {
      console.log("running onChangeSomeThing");
      fullName.value = "Da Thay Doi";
    }
    return {
      fullName,
      onChangeSomeThing,
    };
  },
};
</script>
<style lang=""></style>
