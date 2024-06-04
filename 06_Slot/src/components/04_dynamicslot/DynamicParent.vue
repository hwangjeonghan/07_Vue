<script setup>
    import {ref} from 'vue';

    import DynamicChild from './DynamicChild.vue';
    const dynamicName = ref("name");
</script>

<template>
    <div>
        <h1>DynamicSlot : </h1>
        <input v-model="dynamicName"/>
        <DynamicChild>
            <template #[dynamicName]>
                <img src="https://i.namu.wiki/i/HQ5IfyEEbyJJMPY5tqJFW0kJ1MY6oHbEj0s8bgS3MmVD4pwcN0m6bZWSi_I1vWmw94zEg3xk75leYXeuuIgaSQ.webp"/>
            </template>
        </DynamicChild>
    </div>
</template>

<style scoped>
    .parentsContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;
    }
</style>