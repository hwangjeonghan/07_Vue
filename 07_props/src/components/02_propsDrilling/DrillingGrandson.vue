<script setup>
    import {inject, onUpdated} from 'vue';

    const propsCount = inject("count");

    onUpdated(()=>{
        console.log("grandson update")
    })
</script>

<template>
    <h3>grandson : {{ propsCount }}</h3>
    <button @click="propsCount++">{{ propsCount }}</button>
</template>

