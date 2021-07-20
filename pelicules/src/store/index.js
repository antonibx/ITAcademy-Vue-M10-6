import { createStore } from 'vuex';

export default createStore({
  namespaced: true,
  state: {
    pelis: [],
    cerca: '',
    disp: true,
    nodisp: true
  },
  mutations:{
    omplirPelis(state, pelisAction) {
        state.pelis = pelisAction;
    }
  },
  actions:{
    cercaPelis: async function({commit}){
        const data = await (await fetch('MOCK_DATA.json')).json();
        let pelicules = [];
        data.forEach(element => {
          let filtreText = element.titol.toLowerCase().includes(this.state.cerca);
          let filtreDisp = element.disponibilitat && this.state.disp;
          let filtreNoDisp = !element.disponibilitat && this.state.nodisp;
          if (filtreText && (filtreDisp || filtreNoDisp)) {
              pelicules.push(element);
          }
        });
        commit('omplirPelis', pelicules);
    }
  }
});