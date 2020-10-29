<template>
  <!-- Have to add return false for each <a> @clicks -->
  <div class="container-fluid d-flex h-100 flex-column" id="nav-menu">
    <a class="row flex-fill d-flex justify-content-start" id="browse" href="#">
      <div class="col portlet-container portlet-dropzone my-auto">Browse</div>
    </a>
    <a class="row flex-fill d-flex justify-content-start" id="playlist" href="#">
      <div class="col portlet-container portlet-dropzone my-auto">Playlist</div>
    </a>
    <a class="row flex-fill d-flex justify-content-start" id="search" href="#">
      <div class="col portlet-container portlet-dropzone my-auto">Search</div>
    </a>
    <a class="row flex-fill d-flex justify-content-start" id="settings" href="#">
      <div class="col portlet-container portlet-dropzone my-auto">Settings</div>
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
    padding: 0;
}

#nav-menu a {
    text-decoration: none;
    color: #fff;
    background: #413f3f !important;
    border-bottom: 3px solid #fff;
    box-shadow: inset 5px 1px 1px #000;
}

#browse {
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