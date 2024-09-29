<script setup>
import router from "../router";

const isAuth = localStorage.getItem('isAuth') === 'true';

const logout = () => {
  axios.post('/logout')
      .then(response => {
        localStorage.setItem('isAuth', 'false');

        router.push({name: 'login'});
      })
      .catch(error => {
        console.log(error.response);
      });
}

</script>

<template>
  <div class="flex gap-5 justify-center pt-5">
    <router-link v-if="isAuth" :to="{ name: 'home' }" class="text-green-500 font-bold hover:text-gray-800">Home
    </router-link>
    <div v-if="!isAuth" class="flex gap-5">
      <router-link :to="{ name: 'login' }" class="text-green-500 font-bold hover:text-gray-800">Login</router-link>
      <router-link :to="{ name: 'register' }" class="text-green-500 font-bold hover:text-gray-800">Register
      </router-link>
    </div>
    <a v-else @click="logout" class="text-green-500 font-bold hover:text-gray-800 cursor-pointer">Logout</a>
  </div>
</template>

<style scoped>

</style>