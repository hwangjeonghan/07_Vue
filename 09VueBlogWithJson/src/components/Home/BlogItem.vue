<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const {blog} = defProps(["blog"]);

function detailView(id) {
    router.push(`/blog/${id}`);
    
}

</script>

<template>
<div class="itembox">
    <label>제목 {{ blog.title  }}</label>
    <button @click="detailView(blog.id)">조회하기</button>
</div>

</template>

<style scoped>
.itemBox {
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>