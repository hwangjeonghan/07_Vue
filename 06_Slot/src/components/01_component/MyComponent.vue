<!-- 
    컴포넌트의 lifecycle hooks를 사용하는 방식은 2가지가 있다.
    <script setup>으로 script에 setup 지시문을 추가하여 hooks를 바로 사용하는 방식과
    다음과 같이 사용하는 방식이다.
 -->
<script>
    import {onMounted} from "vue";

    export default{
        setup(){
            onMounted( async () =>{
                console.log("hellow! vue");
            })
        }
    }
</script>
<!-- 
    vue는 사용자의 화면에 보여지는 부분을 내보낼때 다음과 같이 <template> 하위에 구성하여 작성한다.
    template는 다른 엘리먼트 요소를 감싸주는 역할을 수행하며 사용자의 화면에 렌더링할 때 제거된다.
 -->
<template> 
    <h1>Hello vue</h1>
    <h2>test</h2>
</template>


<!-- 
    현재 컴포넌트에서만 적용되는 스타일을 작성한다.
 -->
<style scoped>
/* css를 정의하는 스코프  */

</style>