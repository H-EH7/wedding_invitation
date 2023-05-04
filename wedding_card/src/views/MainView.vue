<template>
  <div class="main">
    <main-intro />
    <wedding-calendar />
    <main-gallery />
    <div class="map-container">
      <main-map />
    </div>
    <guest-book />
    <account-pic />
  </div>
</template>

<script>
import WeddingCalendar from "@/components/WeddingCalendar.vue";
import MainIntro from "@/components/MainIntro.vue";
import MainGallery from "@/components/MainGallery.vue";
import MainMap from "@/components/MainMap.vue";
import GuestBook from "@/components/GuestBook.vue";
import AccountPic from "@/components/AccountPic.vue";

export default {
  components: { WeddingCalendar, MainIntro, MainGallery, MainMap, GuestBook, AccountPic },
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
</style>
