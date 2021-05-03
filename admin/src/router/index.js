import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../views/Main.vue'
import WordList from './../views/WordList.vue'
import WordEdit from './../views/WordEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/words/list',
        component: WordList
      },
      {
        path: '/words/create',
        component: WordEdit
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
