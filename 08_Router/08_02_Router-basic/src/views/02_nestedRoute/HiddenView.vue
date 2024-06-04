<script setup>
    import {useRouter} from 'vue-router';

    const router = useRouter();
</script>

<template>
    <h1>숨겨진 화면</h1>
    <button @click="()=> router.go(-1)">뒤로가기</button>
</template>