<template>
  <div class="top-bar">
    <router-link to="/">
      <logo></logo>
    </router-link>
    <search></search>
  </div>
</template>

<script>
  import Search from './Search'
  import Logo from './Logo'

  export default {
    components: {
      Search,
      Logo
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');

  .top-bar {
    position: fixed;
    display: block;
    height: 50px;
    z-index: 999;
    background: #2e2e2e;
    width: 100%;

    a {
      color: #fff;
    }

    .search-wrapper {
      display: inline-block;

      .field {
        padding: 0;
        label {
          display: inline-block;
        }
      }
      button {
        display: inline-block;
        height: 30px;
        box-shadow: 0 0 6px 3px rgba(0,0,0,0.1)
      }
    }

    .logo {
      font-size: 35px;
      display: inline-block;
      padding: 0 20px;
    }
  }
</style>
