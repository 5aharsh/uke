<template>
  <div>
    <ul v-for="(song, i) in getSongs" :key="i">
        <a href="javascript:void(0)" @click="updateSong(song)">
            <li>{{ song.name }}</li>
        </a>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SongList",
  computed: {
    ...mapGetters(["getSongs", "getCurrentSong"]),
  },
  methods: {
    ...mapActions(["fetchSongs", "updateCurrentSong"]),
    updateSong(song){
        this.updateCurrentSong(song)
    }
  },
  created() {
    this.fetchSongs();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
