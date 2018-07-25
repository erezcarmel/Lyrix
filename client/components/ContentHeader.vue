<template>
  <div class="content-header">
    <img v-if="artwork" class="artwork" v-bind:src="artwork">
    <div class="title-container">
      <div class="title">{{ title }}</div>
      <div v-if="subtitle" class="subtitle" @click="$store.dispatch(click, subtitle)">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      artwork: String,
      click: String
    }
  }
</script>

<style>
  .content-header {
    display: block;

    .artwork, .title-container  {
      display: inline-block;
    }

    .title-container {
      .title {
        font-weight: bold;
        font-size: 28px;
        text-transform: capitalize;
        display: block;
      }

      .subtitle {
        font-size: 24px;
        text-transform: capitalize;
        display: block;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
