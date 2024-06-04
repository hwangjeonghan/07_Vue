<script setup>
    import {inject} from 'vue';

    const {icon} = inject("data");
    const {fun} = inject("data");
</script>


<template>
    <button :class="icon" class="pi" @click="fun(icon)" ></button>
</template>