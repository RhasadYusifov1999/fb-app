<template>
  <section>
    <List :fetch="fetchPost" :main="false"/>
  </section>
</template>

<script>
import List from "@/components/main/List";
export default {
  layout: 'Main', 
  components: {
    List
  },
  computed: {
     fetchPost(){
       return this.$store.getters.allPost
     }
  }
};
</script>

<style >

</style>