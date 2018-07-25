<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    margin: 0;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', Ubuntu, 'segoe ui', arial, sans-serif;
    background: #000;
    color: #fff;
  }
  .page {
    code {
      background-color: #f0f0f0;
      padding: 3px 5px;
      border-radius: 2px;
    }

    .page-content {
      padding: 20px;
      background: rgba(255, 255, 255, .2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);

      ul {
        list-style: none;
        max-height: 400px;
        overflow-y: scroll;
        padding: 0;

        li {
          font-size: 14px;
          cursor: pointer;
        }
      }
    }

    .background {
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: .2;
      position: fixed;
    }
  }
</style>
