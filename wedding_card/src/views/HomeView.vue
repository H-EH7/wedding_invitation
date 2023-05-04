<template>
  <div class="home">
    <img alt="초대장" src="../assets/wedding_card_test.jpg" width="960" height="480" />
    <br />
    <button type="button" class="btn btn-primary" @click="confirm">수락</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    confirm: function () {
      this.$router.push("/intro");
    },
  },
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
