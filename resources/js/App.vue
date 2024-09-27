<script setup>

</script>

<template>
  <div class="flex gap-4 justify-center mt-4">
    <router-link to="/login" class="text-green-500 font-bold hover:text-gray-800">Login</router-link>
    <router-link to="/register" class="text-green-500 font-bold hover:text-gray-800">Register</router-link>
  </div>
  <router-view/>
</template>

<style scoped>

</style>