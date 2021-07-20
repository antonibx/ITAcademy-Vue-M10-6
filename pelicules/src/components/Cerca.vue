<template>
  <div class="bg-dark rounded-pill m-3 pl-5 pr-5">
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <span class="navbar-brand">Buscador</span>
      <input name="cerca" v-model="$store.state.cerca" class="form-control mr-sm-2" type="text" placeholder="Titol" aria-label="Busca">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Busca</button>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <div cass="row" style="margin: auto">
        <input name="disp" v-model="$store.state.disp" type="checkbox" checked="true"><label for="disponbles" class="text-white mr-4"> Disponibles</label>
        <input name="nodisp" v-model="$store.state.nodisp" type="checkbox" checked="true"><label for="nodisponbles" class="text-white"> No disponibles</label>
      </div>
    </nav>
  </div>
</template>

<script>
//import {mapActions} from "vuex"

export default {
  name: 'Cerca',
  data () {
    return {
      disp: true,
      nodisp: true,
      cerca: ''
    }
  },
  //methods: {
  //  ...mapActions('pelis', ['cercaPelis']),
  //},
  mounted() {
    this.$store.dispatch('cercaPelis');
  },
  updated() {
    this.$emit('cerca', this.cerca);
    this.$emit('disp', this.disp);
    this.$emit('nodisp', this.nodisp);
    this.$store.dispatch('cercaPelis');
  }
}
</script>