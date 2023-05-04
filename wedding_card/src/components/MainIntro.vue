<template>
  <div class="intro">
    <img src="prince.jpg" alt="어느 왕자" class="img-fluid" />
    <p>
      옛날 옛날에 <br />
      어느 왕자와
    </p>
    <img src="princess.jpg" alt="놀기 좋아하는 공주" class="img-fluid" />
    <p>
      놀기 좋아하는 <br />
      공주가 살았어요.
    </p>
    <img src="party.jpg" alt="생일파티" class="img-fluid" />
    <p>
      어느날 왕자는 <br />
      공주의 생일파티에 초대되었어요.
    </p>
    <img src="love.jpg" alt="사랑" class="img-fluid" />
    <p>
      왕자와 공주는 <br />
      서로 한눈에 빠져
    </p>
    <img src="marry.jpg" alt="결혼" class="img-fluid" />
    <p>결혼을 하게 되었답니다.</p>
    <img src="invite.jpg" alt="초대" class="img-fluid" />
    <p>
      결혼식에 이웃나라 <br />
      왕자님과 공주님을 초대합니다.
    </p>
  </div>
</template>

<style scoped>
p {
  margin-top: 1rem;
  margin-bottom: 5rem;
}

img {
  border: 1px solid grey;
}

.intro {
  width: 80vw;
  min-width: 230px;
  border: 1px dashed red;
}

@media (min-width: 750px) {
  .intro {
    width: 30vw;
    border: 1px dashed blue;
  }
}
</style>
