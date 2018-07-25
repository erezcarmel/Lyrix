<template>
  <div class="page">
    <top-bar></top-bar>
    <div class="background" v-bind:style="{ backgroundImage: 'url(' + background + ')' }"></div>
    <div class="page-content">
      <content-header
        v-bind:subtitle="artist"
        v-bind:title="track"
        v-bind:artwork="artwork"
        click="albums"></content-header>

      <p class="lyrics">{{ lyrics }}</p>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/TopBar'
  import ContentHeader from '../components/ContentHeader'

  export default {
    computed: {
      artist() {
        return this.$route.query.artist
      },
      track() {
        return this.$route.query.track
      },
      trackData() {
        return this.$store.state.lyrics[this.artist][this.track]
      },
      lyrics() {
        return this.trackData.lyrics
      },
      artwork() {
        return this.trackData.track.album.image[2]['#text']
      },
      background() {
        return this.trackData.track.album.image[3]['#text']
      }
    },
    components: {
      TopBar,
      ContentHeader
    }
  }
</script>

<style>
  .lyrics {
    font-size: 12px;
    text-align: left;
    white-space: pre;
  }
</style>
