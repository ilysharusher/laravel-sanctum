<script setup>
import {onMounted} from "vue";

onMounted(() => {
  getUser();
});

const getUser = () => {
  axios.get('/api/user')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
}
</script>

<template>

</template>

<style scoped>

</style>