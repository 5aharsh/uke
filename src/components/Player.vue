<template>
  <div>
    <audio ref="player" 
        @canplay="updatePaused" 
        @playing="updatePaused" 
        @pause="updatePaused" 
        @loadedmetadata="updateDuration"
        @timeupdate="updateSeekerTimer">
      <source :src="getCurrentSong ? getCurrentSong.location : null" />
    </audio>
    <div class="container-fluid" id="player-bar">
        <div class="row">
            <div class="col-md-auto">
                <img :src="currentSongPreviewImage" id="player-preview-img"/>
            </div>
            <div class="col-md-2">
                <div class="row v-align-center">
                    <div class="col">
                        {{ currentSongTitle }}
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col">
                        <center>{{formattedSongTimer}} / {{formattedSongLength}}</center>
                        <input type="range" name="seek" ref="seeker" min="0" step="0.25" style="width: 90%" 
                        :max="songLength" 
                        v-model="songTimer" 
                        :disabled="getCurrentSong==null"
                        @change="updatePlayerTimer">
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <button class="player-btn" :style="{'background-image': 'url(' + require('../assets/images/prev.png') + ')'}" :disabled="getCurrentSong==null"></button>
                    </div>
                    <div class="col-md-auto">
                        <button class="player-btn" :style="{'background-image': 'url(' + require('../assets/images/play.png') + ')'}" @click="playSong()" v-if="play==false" :disabled="getCurrentSong==null"></button>
                        <button class="player-btn" :style="{'background-image': 'url(' + require('../assets/images/pause.png') + ')'}" @click="playSong()" v-if="play==true" :disabled="getCurrentSong==null"></button>
                    </div>
                    <div class="col-md-auto">
                        <button class="player-btn" :style="{'background-image': 'url(' + require('../assets/images/next.png') + ')'}" :disabled="getCurrentSong==null"></button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 center" id="vol-bar">
                <input type="range" value="1" id="vol-bar" class="player-vol-bar" min="0" max="1" step="0.05" 
                @change="setVolume" 
                v-model="volume">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Player",
  data: ()=>{
      return {
          play: false,
          volume: 1,
          songLength: 0,
          songTimer: 0
      }
  },
  computed: {
    ...mapGetters(["getSongs", "getCurrentSong"]),
    currentSongPreviewImage(){
        if(this.getCurrentSong!=null && this.getCurrentSong.preview!=null)
            return this.getCurrentSong.preview
        return "http://localhost:3000/preview/pick.png"
    },
    currentSongTitle(){
        return this.getCurrentSong!=null?this.getCurrentSong.name: ""
    },
    player() {
        return this.$refs.player
    },
    seeker(){
        return this.$refs.seeker
    },
    formattedSongLength(){
        var sec_num = parseInt(this.songLength, 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    },
    formattedSongTimer(){
        var sec_num = parseInt(this.songTimer, 10)
        var hours   = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours,minutes,seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }
  },
  methods: {
    ...mapActions(["fetchSongs", "updateCurrentSong"]),
    updateSong(song) {
      this.updateCurrentSong(song);
    },
    playSong(){
        this.play = !this.play
        if(this.play)
            this.player.play()
        else
            this.player.pause()
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.play = !event.target.paused;
    },
    setVolume() {
        this.player.volume = this.volume
    },
    updateDuration(){
        this.songLength = this.player.duration
        console.log("duration updation called")
    },
    updateSeekerTimer(){
        this.songTimer = this.player.currentTime
    },
    updatePlayerTimer(){
        this.player.currentTime = this.songTimer
        this.player.play()
    }
  },
  watch: {
    getCurrentSong() {
      this.$refs.player.load()
      this.$refs.player.play()
      this.play = true
    },
  },
  created() {
    this.fetchSongs();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#player-bar {
    background: #1d1f20;
    bottom: 0;
    border-top: 1px solid #fff;
    margin: 0;
    padding: 15px 20px;
    position: fixed;
}

#player-preview-img {
    background: #3b4346;
    border: 2px solid rgb(206, 228, 13);
    border-radius: 10px;
    padding: 3px;
    height: 80px;
}

a {
  color: #42b983;
}

.player-btn{
    background: #fff;
    width:40px;
    height:40px;
    border:1px solid #fff;
    border-radius:50%;
    cursor:pointer;
    background-size:40px 40px;
    background-position:center;
}
.player-vol-bar{
    -webkit-appearance: none;
    background-color: #fff;
    position:relative;
    width:150px;
    height:7px;
    cursor:pointer;
    border-radius:10px;
}

.player-vol-bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: rgb(102, 175, 73);
    width: 15px;
    border-radius:50%;
    height: 15px;
}

.player-vol-bar:focus{
    outline:none;
}

#vol-bar {
    margin: auto;
}
.v-align-center {
    display: flex;
    align-items: center;
}
</style>
