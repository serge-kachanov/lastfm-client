<template>
  <div>
    <p> <ImagePartial :imageUrl="imageUrl"/> </p>
    <p> Name: {{ artist.name }} </p>
    <p> Listeners: {{ artist.listeners }} </p>
    <p v-bind:hidden="!artist.playcount"> Playcount: {{ artist.playcount }} </p>
  </div>
</template>

<script>

import ImagePartial from '@/components/ImagePartial'

export default {
  name: 'ArtistPartial',
  props: [
    'artist'
  ],
  components: {
    ImagePartial
  },
  computed: {
    imageUrl: function () {
      return this.artist.image ? this.artist.image[4]['#text'] : 'http://localhost:8080/static/img/logo.541897b.png'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
