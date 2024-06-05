<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/post">Post</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  margin-left: 10px;
  font-size: 20px;
}
</style>
