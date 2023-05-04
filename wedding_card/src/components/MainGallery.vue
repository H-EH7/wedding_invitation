<template>
  <div class="gallery">
    <div class="container text-center">
      <div class="row row-cols-2">
        <div class="col">
          <img src="sample.jpg" alt="샘플사진" class="img-fluid" />
        </div>
        <div class="col">
          <img src="invite.jpg" alt="샘플사진" class="img-fluid" />
        </div>
        <div class="col">
          <img src="invite.jpg" alt="샘플사진" class="img-fluid" />
        </div>
        <div class="col">
          <img src="sample.jpg" alt="샘플사진" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border: 1px solid grey;
}

.gallery {
  border: 1px dashed red;
}

@media (min-width: 750px) {
  .gallery {
    border: 1px dashed blue;
  }
}

.row {
  align-items: center;
  background-color: beige;
}
</style>
