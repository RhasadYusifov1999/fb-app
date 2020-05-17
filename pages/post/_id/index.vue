<template>
  <section>
    <Detail :data="getData"/>
  </section>
</template>

<script>
import Detail from "@/components/main/Detail";
export default {
  components: {
    Detail
  },
  computed: {
    getData(){
      return this.$store.state.detailObj;
    }
  },
  created(){
    this.$store.commit("detailData", this.$route.params.id);
  }
};
</script>

<style >

</style>