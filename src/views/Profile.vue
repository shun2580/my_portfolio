<template>
  <section class="profile">
    <v-container fluid fill-height class="profile__content">
      <v-row>
        <v-col class="profile__content-text">
          <p>はじめまして！！！！</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<style  lang="scss" scoped>
.profile__content {
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