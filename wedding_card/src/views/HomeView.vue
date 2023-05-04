<template>
  <div class="home">
    <img alt="초대장" src="../assets/wedding_card_test.jpg" class="img-fluid" />
    <br />
    <button type="button" class="btn btn-primary" @click="confirm">수락</button>
  </div>
</template>

<script>
export default {
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
  border: 1px dashed red;
  width: 90vw;
  height: auto;
}

@media (min-width: 750px) {
  .home {
    width: 50vw;
    height: auto;
    border: 1px dashed blue;
  }
}
</style>
