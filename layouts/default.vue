<template>
  <div>
    <nuxt/>
    <!-- <my-footer/> -->
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{
  width: 100%;
  padding: 100px 0;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>