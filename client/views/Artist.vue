<template>
  <div class="page">
    <top-bar></top-bar>
    <img class="artist-background" v-bind:src="'//logo.clearbit.com/' + artist + '.com'">
    <div class="page-content">
      <content-header
        v-bind:title="artist"
        v-bind:artwork="'//logo.clearbit.com/' + artist + '.com'"
        click="albums"></content-header>

      <ul class="albums">
        <li v-for="album in albums" @click="$store.dispatch('album', album)">
          <img class="artwork" v-bind:src="album.image[0]['#text']">
          {{ album.name }}
        </li>
      </ul>
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
      albums() {
        return this.$store.state.lyrics[this.artist].albums
      }
    },
    components: {
      TopBar,
      ContentHeader
    }
  }
</script>

<style>
  .artist-background {
    width: 800px;
    z-index: -1;
    opacity: .2;
    margin: auto 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
