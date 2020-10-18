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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
