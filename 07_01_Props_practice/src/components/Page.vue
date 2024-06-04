<script setup>
    import { ref, provide} from 'vue';
    import Ibtn from "./public/Button.vue";
    
    const icon = ref("pi-search");

    const fun = (props)=>{
        alert("hello " + props )
    }

    provide("data",{icon, fun});
    
</script>


<template>

    <main>
        <label for="test">id 입력</label>
        <input id="test" v-model="icon"/>
        <Ibtn/>
    </main>
</template>
