<template>
  <div class="page">
    <top-bar></top-bar>
    <div class="background" v-bind:style="{ backgroundImage: 'url(' + background + ')' }"></div>
    <div class="page-content">
      <content-header
        v-bind:subtitle="artist"
        v-bind:title="album.name"
        v-bind:artwork="artwork"
        click="albums"></content-header>

      <ul class="tracks">
        <li v-for="track in tracks" @click="$store.dispatch('lyrics', { artist: track.artist.name, track: track.name })">
          {{ track.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/TopBar'
  import ContentHeader from '../components/ContentHeader'
  import _ from 'lodash'

  export default {
    computed: {
      artist() {
        return this.$route.query.artist
      },
      album() {
      	const artist = this.$route.query.artist
      	const albumName = this.$route.query.album
        const albums = this.$store.state.lyrics[artist].albums;
        const index = _.findIndex(albums, album => album.name === albumName);

        return this.$store.state.lyrics[this.artist].albums[index]
      },
      background() {
        return this.$store.state.lyrics[this.artist][this.track].track.album.image[3]['#text']
      },
      artwork() {
        return this.album.image[2]['#text']
      },
      background() {
        return this.album.image[3]['#text']
      },
      tracks() {
        return this.album.tracks.track
      }
    },
    components: {
      TopBar,
      ContentHeader
    }
  }
</script>
