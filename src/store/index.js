import Vue from "vue";
import Vuex from "vuex";
import songs from "./modules/songs";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		songs
	}
});
