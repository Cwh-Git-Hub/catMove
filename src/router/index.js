import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from './movie/movie.js'
import mine from './movie/mine.js'
import cinema from './movie/cinema.js'

Vue.use(VueRouter)

  const routes = [
  movie,
  mine,
  cinema
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
