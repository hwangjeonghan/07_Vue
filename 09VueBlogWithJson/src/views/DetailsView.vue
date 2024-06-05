<script setup>
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/blog'
import { watchEffect, ref } from 'vue';

const route = useRoute();
const blogStroe = useBlogStore();
const modify = ref(true);

watchEffect(() => {
    blogStroe.detailsHandler(route.params.id);
});

const handler = () => {
    blogStroe.modifyHandler({id : route.params.id, ...blogStroe.detailsBlog.value })
}
const deleteMethod = () =>{
    blogStroe.deleteHandler(route.params.id);

}
</script>

<template>
    <div class="blogContainer">
        <div class="titleContainer">
            <h1 class="title" v-if="modify"> {{ blogStroe.detailsBlog.value?.title }}</h1>
            <input v-else v-model="blogStroe.detailsBlog.value.title"/>
            <div v-if="modify">
                <button @click="() => modify = false">수정</button>
                <button @click="deleteMethod">삭제</button>
            </div>
            <div v-else>
                <button @click="handler">완료</button>
                <button @click="() => modify = true">취소</button>
            </div>
        </div>

        <div class="contentContainer" v-if="modify">
            <div class="content">
                {{ blogStroe.detailsBlog.value?.content }}
            </div>
            <div>
                <img class="imgBox" :src="blogStroe.detailsBlog.value?.img" :alt="blogStroe.detailsBlog.value?.title" />
            </div>
        </div>
        <div class="content" v-else>
            <div>
                <textarea v-model="blogStroe.detailsBlog.value.content" ></textarea>
            </div>
            <div class="imgContainer">
                <div>
                    <label> 이미지 url : </label>
                    <input class="imgInput" v-model="blogStroe.detailsBlog.value.img" />
                </div>
                <img class="imgBox" :src="blogStroe.detailsBlog.value.img" :alt="blogStroe.detailsBlog.value.title" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.blogContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 700px;
    border: 1px solid;
    margin-left: auto;
    margin-right: auto;

}

.titleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.title {
    width: 40%;

    text-align: center;
    border-bottom: 1px solid;
}

.contentContainer {
    text-align: center;
    width: 70%;
}

.content {

    text-align: left;
    margin-bottom: 2%;
    border: 1px;
}

textarea {
    width: 100%;
    height: 200px;
}

.imgInput {
    width: 65%;
}

.imgBox {
    width: 300px;
    height: 300px;
}

.imgContainer {
    display: flex;
    flex-direction: column;
}
</style>