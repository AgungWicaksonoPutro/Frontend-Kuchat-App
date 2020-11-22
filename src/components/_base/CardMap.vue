<template>
    <div class="card mx-3">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
    </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  name: 'CardMap',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom: 12,
      center: latLng(-7.868119, 111.4381475),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(-7.868119, 111.4381475),
      markerLatLng: null,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    showLongText () {
      this.showParagraph = !this.showParagraph
    },
    innerClick () {
      alert('Click!')
    },
    getLocation () {
      if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(this.setLocation) }
    },
    setLocation (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      this.markerLatLng = latLng(latitude, longitude)
    }
  },
  mounted () {
    this.getLocation()
  }
}
</script>

<style scoped>
.card{
    height: 200px;
}
</style>
