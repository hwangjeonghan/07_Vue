<script setup>
    import {inject} from 'vue';

    const readValue = inject("readValue");
    
</script>

<template>
    <h1>{{ readValue }}</h1>
    자식의 readValue : <input v-model="readValue"/>
</template>