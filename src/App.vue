<template>
  <div id="app">
    <div id="content">
      <div id="body" class="container-fluid">
        <div class="row flex-xl-nowrap">
          <div class="col-12 col-md-3 col-xl-2 nav-sidebar">
              <Nav/>
          </div>
          <main role="main" class="col-12 col-md-9 col-xl-10 py-md-3">
            <h2>uke</h2>
            <song-list />
          </main>
        </div>
      </div>
      <div id="footer">
        <player />
      </div>
    </div>
  </div>
</template>

<script>
import Player from "./components/Player.vue";
import SongList from "./components/SongList.vue";
import Nav from "./components/Nav.vue"

export default {
  name: "App",
  components: {
    Player,
    SongList,
    Nav
  },
};
</script>

<style>
html {
  background-color: #2a2f31 !important;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

html,
body {
  background-color: #2a2f31;
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
}

#content {
  min-height: 100%;
  position: relative;
}

#body {
  padding-bottom: 125px;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 125px;
}

.nav-sidebar {
    padding: 0;
}

@media (min-width: 768px) {
    .nav-sidebar {
        height: calc(100vh - 125px);
    }
}
</style>
