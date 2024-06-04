<script setup>
import {onMounted,  ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

onMounted(()=>{
    console.log(route.params);
})
</script>

<template>
    <h1>PathVariable : {{ $route.params.id }}</h1>
</template>

<style scoped>
  
</style>