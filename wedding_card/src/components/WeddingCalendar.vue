<template>
  <div class="calendar">
    <img src="calendar.jpg" alt="달력" class="img-fluid" />
  </div>
</template>

<style scoped>
img {
  border: 1px solid grey;
}

.calendar {
  width: 80vw;
  min-width: 230px;
  border: 1px dashed red;
}

@media (min-width: 750px) {
  .calendar {
    width: 50vw;
    border: 1px dashed blue;
  }
}
</style>
