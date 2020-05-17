<template>
  <section>
    <div class="container">
      <div class="row">
        <Card :post="item" :main="main" v-for="(item, index) in fetch" :key="index"/>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card';
export default {
    components: {
        Card
    },
    props: {
       main: {
         required: true,
         type: Boolean,
       },
       fetch: {
         required: true,
         type: Array
       }
    }
};
</script>

<style scoped>
  section{
    padding-top: 30px;
  }

</style>