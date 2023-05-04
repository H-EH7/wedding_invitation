<template>
  <div class="guest-book">
    <p>대충 방명록</p>
  </div>
</template>

<style scoped>
.guest-book {
  width: 80vw;
  height: 300px;
  border: 1px dashed red;
}

@media (min-width: 750px) {
  .guest-book {
    width: 50vw;
    border: 1px dashed blue;
  }
}
</style>
