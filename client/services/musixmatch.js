import Vue from 'vue'
import config from '../../config.json'
const apiPath = 'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?'

export default {
  get (request) {
    const path = `${apiPath}q_artist=${request.artist}&q_track=${request.track}&apikey=${config.musixmatchkey}&format=jsonp`

    return Vue.http.jsonp(path, request)
      .then(response => response.json())
      .catch(error => Promise.reject(error))
  }
}
