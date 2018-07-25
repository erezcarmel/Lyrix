<template>
  <div class="page">
    <div class="search-box">
      <logo></logo>
      <search></search>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search'
  import Logo from '../components/Logo'

  export default {
    components: {
      Search,
      Logo
    }
  }
</script>

<style>
  .search-box {
    display: block;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 950px;
  }
</style>
