<template>
  <div>
    <h1>{{titol}}</h1>
    <Cerca @disp="disp = $event" @nodisp="nodisp = $event"/>
    <div class="container-fluid">
      <div class="row">
        <div v-for="(item, index) in ($store.state.pelis)" :key="index" class="col-xs-12 col-sm-6 col-md-4 mt-4">
          <Pelicula class="animate__animated animate__zoomIn" :item="item" v-if="(item.disponibilitat && disp) || (!item.disponibilitat && nodisp)"/>
        </div>
        <div v-if="($store.state.pelis).length==0" class="container alert alert-danger mt-3">No hi ha pelis disponibles</div>
      </div>
    </div>
  </div>
</template>

<script>
import Pelicula from './Pelicula.vue'
import Cerca from './Cerca.vue'

export default {
  name: 'LlistaPelis',
  data () {
    return {
      disp: true,
      nodisp: true
    }
  }, 
  components: {
    Pelicula,
    Cerca
  },
  props: {
    titol: String
  }
}
</script>

<style scoped>
h3 {margin: 40px 0 0;}
ul {list-style-type: none;
    padding: 0;}
li {display: inline-block;
    margin: 0 10px;}
</style>