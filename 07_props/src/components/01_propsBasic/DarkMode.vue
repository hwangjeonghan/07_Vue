<script setup>
    import {inject} from 'vue';
    const darkState = inject("darkState");

    function darkMode() { 
        darkState.value = !darkState.value;
    }
</script>

<template>
    <button @click="darkMode">{{ (darkState) ? "dkark" : "no"}}</button>
</template>