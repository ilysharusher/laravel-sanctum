<script setup>
import {onMounted} from "vue";
import AuthLinks from "../components/AuthLinks.vue";

onMounted(() => {
  getUser();
});

const getUser = () => {
  axios.get('/api/user')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
}
</script>

<template>
  <AuthLinks/>
</template>

<style scoped>

</style>