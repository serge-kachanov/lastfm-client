<template>
  <div class="hello">
    <tbody>
      <tr v-for="artist in artists" :key="artist.mbid">
        <router-link :to="{name: 'Artist', params: {mbid: artist.mbid}}">
          <ArtistPartial :artist='artist'/>
        </router-link>
      </tr>
    </tbody>
  </div>
</template>

<script>

import ArtistPartial from '@/components/ArtistPartial'

const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ukraine&api_key=8bff6c0fffbe73c3a71b94c02e9d263d&format=json'

export default {
  name: 'Artists',
  data () {
    return {
      artists: [{
        mbid: 1,
        name: 'loading',
        listeners: 'loading',
        playcount: 0,
        img: '../assets/logo.png'
      }]
    }
  },
  components: {
    ArtistPartial
  },
  methods: {
    fetchArtists () {
      this.$http.get(URL).then(response => {
        this.artists = response.body.topartists.artist
      }, response => {
        console.log('error occured')
      })
    }
  },
  beforeMount () {
    this.fetchArtists()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
