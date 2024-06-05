<script setup>
import BlogItem from "./BlogItem.vue";
import { useBlogStore } from "../../stores/blog";
import { onMounted, provide } from "vue";

const blogStore = useBlogStore();

onMounted(() => {
    blogStore.blogHandler();
});
</script>

<template>
  <div v-for="blog in blogStore.blogs" class="listBox">
    <BlogItem :key="blog.id" :blog="blog"></BlogItem>
  </div>
</template>

<style scoped>
.listBox {
  width: 70%;
}
</style>
