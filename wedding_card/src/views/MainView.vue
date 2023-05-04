<template>
  <div class="main">
    <main-intro></main-intro>
    <wedding-calendar></wedding-calendar>
    <main-gallery></main-gallery>
    <div class="map-container">
      <main-map></main-map>
    </div>
    <div class="guest-book">대충 방명록</div>
    <div class="account">대충 계좌 사진들</div>
  </div>
</template>

<script>
import WeddingCalendar from "@/components/WeddingCalendar.vue";
import MainIntro from "@/components/MainIntro.vue";
import MainGallery from "@/components/MainGallery.vue";
import MainMap from "@/components/MainMap.vue";

export default {
  components: { WeddingCalendar, MainIntro, MainGallery, MainMap },
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.map-container {
  width: 90vw;
  height: auto;
  border: 1px dashed red;
}

@media (min-width: 750px) {
  .map-container {
    width: 60vw;
    height: auto;
    border: 1px dashed blue;
  }
}

.guest-book {
  border: 1px dashed red;
}

.account {
  border: 1px dashed red;
}
</style>
