<template>
  <!-- Have to add return false for each <a> @clicks -->
  <div class="row" id="nav-menu">
    <a class="col" id="library" href="#">
      Library
    </a>
    <a class="col" id="playlist" href="#">
      Playlist
    </a>
    <a class="col" id="search" href="#">
      Search
    </a>
    <a class="col" id="settings" href="#">
      Settings
    </a>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>

#nav-menu {
    text-align: center;
    padding: 0;
}

#nav-menu a {
    background: #413f3f;
    color: #fff;
    font-size:18px;
    font-weight:bold;
    padding-top:20px;
    padding-bottom:20px;
    text-decoration: none;
}

#nav-menu a:hover {
    background: #1f1d1d;
    color: #3ac975;
}

#nav-menu a,
#nav-menu a:after,
#nav-menu a:before {
  transition: all 0.25s;
}

#nav-menu a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '';
  color: transparent;
  background: #3ac975;
  height: 5px;
}

#nav-menu a:hover:after {
  width: 100%;
}

#library {
    background: #165e8f;
}

#playlist {
    background: #52b600;
}

#search {
    background: #d0da45;
}

#settings {
    background: #ce3e34;
}

</style>