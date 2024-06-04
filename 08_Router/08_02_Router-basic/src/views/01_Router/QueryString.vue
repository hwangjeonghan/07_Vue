<script setup>
    /* 
        router
        라우트 객체에 엑세스할 수 있도록 해주는 메서드로 
        이 객체를 사용하면 현재 라우트 정보를 확인할 수 있으며 
        주로 현재 라우트의 매개변수 혹은 쿼리 문자열과 같은 정보를 사용하여
        동적으로 컴포넌트를 렌더링하거나 조건부 렌더링을 구현할 대 사용된다.
    */
    import {useRoute} from "vue-router";
    import {onMounted} from 'vue';
    const route  = useRoute();
    onMounted(()=>{
        console.log(route.query);
    })

</script>
<template>
    <h1>name : {{ $route.query.name }} age : {{ $route.query.age }}</h1>
</template>