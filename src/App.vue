<template>
  <div id="app">
    <div id="content">
      <div id="body" class="container-fluid">
        <div class="nav-top">
              <Nav/>
        </div>
      </div>
      <div class="container">  
          <main role="main">
            <song-list />
          </main>
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
  background-color: #2a2f31;
  color: #e3e1de;
}

a {
  color: #3790f9;
}

main {
    padding-top:40px;
}

@media (min-width: 768px) {
    .nav-sidebar {
        height: calc(100vh - 125px);
    }
}
</style>
