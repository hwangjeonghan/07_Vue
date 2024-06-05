import AboutView from '@/views/AboutView.vue'
import BlogPost from '@/views/BlogPost.vue'
import DetailsView from '@/views/DetailsView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name: 'home',
      component: HomeView
    },
    {
      path:"/blogs/:id",
      name:"blogs",
      component : DetailsView
    },
    {
      path:"/post",
      name:"post",
      component:BlogPost
    },
    {
      path :"/about",
      name :"about",
      component : AboutView
    }
  ]
})

export default router
