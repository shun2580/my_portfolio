<template>
  <section class="home">
    <v-container fluid fill-height class="home__content">
      <v-row>
        <v-col class="home__content-text">
          <p>Welcome to my portfolio.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<style  lang="scss" scoped>
.home__content {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  &-text {
    color: black;
    text-align: center;
    font-size: 100px;
    font-weight: bold;
  }
}
</style>