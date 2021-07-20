<template>
  <div class="jumbotron border border-secondary h-100 pb-0 pt-4">
    <h6 class="display-6 text-primary"># {{item.id}}</h6>
    <span v-if="item.disponibilitat" class="badge badge-success">Disponible</span>
    <span v-else class="badge badge-danger">No disponible</span>
    <h3 class="display-5 text-dark m-3">{{item.titol}}</h3>
    <hr>
    <p class="text-muted">{{item.descripcio}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Pelicula',
    props: {
      item: Object
    }
  }
</script>