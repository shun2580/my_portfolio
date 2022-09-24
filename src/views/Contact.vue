<template>
  <div class="contact">
    <v-container fluid>
      <iframe
        :src="src"
        width="100%"
        height="800px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >読み込んでいます…
      </iframe>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      src:"https://docs.google.com/forms/d/e/1FAIpQLScFDIE_KZytUAxu2cp1CR7W76HS00F5picJ52skeB0XliLPxw/viewform?embedded=true"
    }),
  };
</script>

<style>
  .contact {
    background-image: url("~@/assets/img/contact.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
</style>