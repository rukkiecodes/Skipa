import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeCards: [
      {
        img: require("./assets/bg1.jpg"),
        title: "Mary Tyler",
        review: "Runing out of time",
        avatar: require("./assets/av3.png"),
        buttons: {
          heart: "mdi-heart",
          eye: "mdi-eye",
          download: "mdi-download"
        }
      },
      {
        img: require("./assets/bg2.jpg"),
        title: "John Doe",
        review: "Capture your favrite moments",
        avatar: require("./assets/av2.jpg"),
        buttons: {
          heart: "mdi-heart",
          eye: "mdi-eye",
          download: "mdi-download"
        }
      },
      {
        img: require("./assets/bg3.jpg"),
        title: "Jeorge SP",
        review: "Where do you like it",
        avatar: require("./assets/av1.jpg"),
        buttons: {
          heart: "mdi-heart",
          eye: "mdi-eye",
          download: "mdi-download"
        }
      },
      {
        img: require("./assets/bg4.jpg"),
        title: "Tosin Leni",
        review: "Bad ass Videographer",
        avatar: require("./assets/av4.png"),
        buttons: {
          heart: "mdi-heart",
          eye: "mdi-eye",
          download: "mdi-download"
        }
      }
    ]
  },
  mutations: {},
  actions: {}
});
