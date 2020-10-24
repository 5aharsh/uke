<template>
  <div id="app">
        <h2>uke</h2>
        <song-list/>
        <player/>
  </div>
</template>

<script>
import Player from './components/Player.vue'
import SongList from './components/SongList.vue'

export default {
  name: 'App',
  components: {
    Player,
    SongList
  }
}
</script>

<style>
html {
    background-color: #2a2f31 !important;
}

html, body, input, textarea, select, button {
    background-color: #2a2f31;
}

html, body, input, textarea, select, button {
    border-color: #746c60;
    color: #e3e1de;
}

a {
    color: #3790f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
