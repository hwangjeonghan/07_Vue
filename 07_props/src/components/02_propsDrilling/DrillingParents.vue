<script setup>
    import {provide, ref, onUpdated} from 'vue';
    import Child from './DrillingChild.vue';
    onUpdated(() =>{
        console.log("parents updated")
    })

    const count = ref(0);
    provide('count', count);
</script>

<template>
    <div class="container">
        <h1>parents : {{ count }}</h1>
        <Child />
    </div>
</template>

<style scoped>
    .container{
        border: 1px solid;
        display: flex;
        flex-direction: column;
        align-items:  center;
    }
</style>