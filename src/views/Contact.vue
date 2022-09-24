<template>
  <div id="contact">
    <v-container fluid>
          <iframe
            :src="src"
            width="100%"
            height="750px"
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
              src:
        "https://docs.google.com/forms/d/e/1FAIpQLScFDIE_KZytUAxu2cp1CR7W76HS00F5picJ52skeB0XliLPxw/viewform?embedded=true"
    }),

};
</script>