import Vue from 'vue'
import Router from 'vue-router'

import Lyrics from '../views/Lyrics'
import Search from '../views/Search'
import Artist from '../views/Artist'
import Album from '../views/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/lyrics',
      name: 'lyrics',
      component: Lyrics
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    }
  ]
})
