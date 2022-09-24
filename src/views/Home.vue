<template>
  <v-container fluid fill-height class="home__content">
    <v-row>
      <v-col class="home__content-text">
        <p>Welcome to my portfolio.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style  lang="scss" scoped>
  .home__content {
    background-image: url("~@/assets/img/home.png");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;

    &-text {
      color: white;
      text-align: center;
      font-size: 100px;
      font-weight: bold;
      animation: key .3s ease infinite alternate;
    }

    @keyframes key {
    0% {transform: translateY(0px);}
    100% {transform: translateY(-10px);}
    }
  }
</style>