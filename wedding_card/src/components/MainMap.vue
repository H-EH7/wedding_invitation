<template>
  <naver-map
    style="width: 100%; height: 400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-marker :latitude="36.3464255" :longitude="127.3840629" @onLoad="onLoadMarker($event)"> </naver-marker>
    <naver-info-window :marker="marker" :open="isOpen" :options="infoWindowOptions" @onLoad="onLoadInfoWindow($event)">
      <div class="infowindow-style">click Marker!😎</div>
    </naver-info-window>
  </naver-map>

  <a href="https://naver.me/FOh7yaDE" target="_blank">
    <button type="button" class="btn btn-primary">네이버 지도에서 보기</button>
  </a>
  <a href="http://kko.to/k2p3oB8pV9" target="_blank">
    <button type="button" class="btn btn-primary">카카오 지도에서 보기</button>
  </a>
</template>

<script setup>
import { ref } from "vue";
import { NaverMap, NaverMarker, NaverInfoWindow } from "vue3-naver-maps";

const map = ref();
const mapOptions = {
  latitude: 36.3464255, // 지도 중앙 위도
  longitude: 127.3840629, // 지도 중앙 경도
  zoom: 16,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
const initLayers = ["BACKGROUND", "BACKGROUND_DETAIL", "POI_KOREAN", "TRANSIT", "ENGLISH"];

const onLoadMap = (mapObject) => {
  map.value = mapObject;
};

const marker = ref();
const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};

const infoWindow = ref();
const infoWindowOptions = {
  borderColor: "#000",
  disableAnchor: false,
};
const isOpen = ref(true); // false: 안보임, true: 보임
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
};
</script>

<style>
naver-map {
  width: 100%;
  height: 500px;
}

.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
