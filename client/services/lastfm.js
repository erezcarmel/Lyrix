import Vue from 'vue'
import config from '../../config.json'

const lastfmApi = 'http://ws.audioscrobbler.com/2.0/?'

export default {
  track (request) {
    const lastfmPath = `${lastfmApi}method=track.getInfo&api_key=${config.lastfmkey}&artist=${request.artist}&track=${request.track}&format=json`

    return Vue.http.get(lastfmPath)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  },

  albums (request) {
    const lastfmPath = `${lastfmApi}method=artist.getTopAlbums&api_key=${config.lastfmkey}&artist=${request.artist}&format=json`

    return Vue.http.get(lastfmPath)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  },

  album (request) {
    const lastfmPath = `${lastfmApi}method=album.getInfo&api_key=${config.lastfmkey}&artist=${request.album.artist.name}&album=${request.album.name}&format=json`

    return Vue.http.get(lastfmPath)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  }
}
