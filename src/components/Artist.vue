<template>
  <div>
    <ArtistPartial :artist='artist'/>
  </div>
</template>

<script>

import ArtistPartial from '@/components/ArtistPartial'

export default {
  name: 'Artist',
  data () {
    return {
      artist: {
        mbid: 1,
        name: 'loading',
        img: '../assets/logo.png',
        listeners: 0,
        playcount: 0
      }
    }
  },
  components: {
    ArtistPartial
  },
  methods: {
    fetchArtist () {
      this.$http.get(this.url).then(response => {
        this.setData(response.body.artist)
      }, response => {
        console.log('error occured')
      })
    },

    setData (artist) {
      this.artist = artist
      this.artist.listeners = artist.stats.listeners
      this.artist.playcount = artist.stats.playcount
    }
  },
  computed: {
    url: function () {
      return `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${this.$route.params.mbid}&api_key=8bff6c0fffbe73c3a71b94c02e9d263d&format=json`
    }
  },
  beforeMount () {
    this.fetchArtist()
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
