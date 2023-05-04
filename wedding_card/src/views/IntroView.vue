<template>
  <div class="intro">
    <div id="img-sequence">
      <img id="screen" alt="intro" :src="path" />
    </div>
    <p v-if="isStart">스크롤을 천천히 내려주세요.</p>
    <button v-if="isFinished" type="button" class="btn btn-primary" @click="next">다음으로</button>
    <div class="blank"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollYPos: 0,
      imgNum: 0,
      path: "./intro/intro0.jpg",
      alpha: 1,
    };
  },
  computed: {
    isFinished() {
      return this.scrollYPos > 1360;
    },
    isStart() {
      return this.scrollYPos <= 70;
    },
  },
  methods: {
    scrollEvent() {
      this.scrollYPos = Math.round(window.scrollY / 10);
      console.log(this.scrollYPos);
      if (this.scrollYPos <= 1260) {
        document.getElementById("screen").style.opacity = 1;
        this.imgNum = this.scrollYPos;
        this.path = "./intro/intro" + this.imgNum + ".jpg";
      } else if (this.scrollYPos > 1260 && this.scrollYPos <= 1360) {
        const img = document.getElementById("screen");
        img.style.opacity = this.alpha;
        this.alpha = 1 - (this.scrollYPos - 1260) / 100;
      } else if (this.scrollYPos > 1360) {
        document.getElementById("screen").style.opacity = 0;
      }
    },
    next() {
      this.$router.push("/main");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollEvent);
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollEvent);
  },
};
</script>

<style scoped>
#img-sequence {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: black;
  /*    border: 2px dashed red;*/
}

img {
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blank {
  height: 20000px;
}
</style>
