<template>
  <div class="search-wrapper">
    <div class="field">
      <label>Artist name</label>
      <input class="search-input artist" v-model="artist">
    </div>
    <div class="field">
      <label>Track name</label>
      <input class="search-input track" v-model="track">
    </div>

    <button class="submit-button" @click="$store.dispatch('search')">Go!</button>
    <div v-if="$store.state.errorMessage" class="error">{{ $store.state.errorMessage }}</div>
  </div>
</template>

<script>
  export default {
    computed: {
      artist: {
        get() {
          return this.$store.state.form.artist;
        },
        set(value) {
          this.$store.commit('UPDATE_ARTIST', value);
        },
      },
      track: {
        get() {
          return this.$store.state.form.track;
        },
        set(value) {
          this.$store.commit('UPDATE_TRACK', value);
        },
      }
    },
  }
</script>

<style>
.search-wrapper {
  .field {
    display: inline-block;
    padding: 20px;
  }

  label {
    display: block;
    font-size: 14px;
    text-align: left;
  }

  .search-input {
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    width: 300px;
    text-align: left;
    font-size: 1rem;
    background-color: #fff;
    padding: 5px;
    border: 0;
  }

  button {
    display: block;
    width: 150px;
    height: 40px;
    margin: 0 auto;
    font-size: 16px;
    border: 0;
    background: #f2f2f2;
  }

  .error {
    font-size: 14px;
    color: #f00;
    display: inline-block;
  }
}
</style>
