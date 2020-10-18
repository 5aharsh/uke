import axios from 'axios'

const state = {
    songs: [],
    currentSong: null
}

const getters = {
    getSongs: state => state.songs,
    getCurrentSong: state => state.currentSong
}

const actions = {
    async fetchSongs({ commit }){
        const response = await axios.get(
            'http://localhost:3000/data/musics.json'
        )
        commit('setSongs', response.data)
    },
    updateCurrentSong({ commit }, song){
        commit('setCurrentSong', song)
    }
}

const mutations = {
    setSongs: (state, songs) => (state.songs = songs),
    setCurrentSong: (state, song) => (state.currentSong = song)
}

export default {
    state,
    getters,
    actions,
    mutations
}