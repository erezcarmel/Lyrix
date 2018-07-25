import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import router from '../router'
import _ from 'lodash'

import musixmatchService from '../services/musixmatch'
import lastfmService from '../services/lastfm'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  form: {
    artist: '',
    track: ''
  },
  lyrics: {},
  errorMessage: ''
}

const mutations = {
  UPDATE_ARTIST (state, text) {
    state.form.artist = text
  },
  UPDATE_TRACK (state, text) {
    state.form.track = text
  },
  SAVE_SEARCH_RESULT (state, data) {
    state.errorMessage = ''
    state.lyrics = {
      ...state.lyrics,
      [data.track.artist.name]: {
        ...state.lyrics[data.track.artist.name],
        [data.track.name]: data
      }
    }

    router.push({
      name: 'lyrics',
      query: {
        artist: data.track.artist.name,
        track: data.track.name
      }
    })
  },
  SAVE_ALBUMS_RESULT (state, data) {
    state.lyrics = {
      ...state.lyrics,
      [data['@attr'].artist]: {
        ...state.lyrics[data['@attr'].artist],
        albums: data.album
      }
    }

    router.push({
      name: 'artist',
      query: {
        artist: data['@attr'].artist
      }
    })
  },
  SAVE_ALBUM_RESULT (state, data) {
    const index = _.findIndex(state.lyrics[data.artist].albums, album => album.name === data.name)
    const albums = [...state.lyrics[data.artist].albums]
    albums[index] = data
    state.lyrics = {
      ...state.lyrics,
      [data.artist]: {
        ...state.lyrics[data.artist],
        albums
      }
    }

    router.push({
      name: 'album',
      query: {
        artist: data.artist,
        album: data.name
      }
    })
  },
  SEARCH_FAILED (state, message) {
    state.errorMessage = message;
  },
  HOME (state) {
    state.form.artist = ''
    state.form.track = ''
    router.push({ name: 'search' })
  }
}

const actions = {
  search ({ commit }) {
    lastfmService.track(state.form)
      .then(trackRes => {
        if (trackRes.body.error) {
          commit('SEARCH_FAILED', trackRes.body.message)
        } else {
          musixmatchService.get(state.form)
            .then(lyricsRes => {
              commit('SAVE_SEARCH_RESULT', { ...trackRes.body, lyrics: lyricsRes.message.body.lyrics.lyrics_body })
            })
        }
      })
  },
  albums ({ commit }, artist) {
    lastfmService.albums({ artist })
      .then(response => {
        commit('SAVE_ALBUMS_RESULT', response.body.topalbums)
      })
  },
  album ({ commit }, album) {
    lastfmService.album({ album })
      .then(response => {
        commit('SAVE_ALBUM_RESULT', response.body.album)
      })
  },
  lyrics ({ dispatch, commit }, { artist, track }) {
    commit('UPDATE_ARTIST', artist)
    commit('UPDATE_TRACK', track)
    dispatch('search')
  },
  home ({ commit }) {
    commit('HOME')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
