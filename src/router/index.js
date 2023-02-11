import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, RegistView, LoginView, ArticleDetailView, CreateArticleView } from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/regist',
      name: 'regist',
      component: RegistView,
    },
    {
      path: '/article/:slug',
      name: 'articleDetail',
      component: ArticleDetailView
    },
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticleView
    }
  ]
})

export default router
