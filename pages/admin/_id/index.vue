<template>
  <div>
    <Control :detail="getData" :post="false" />
  </div>
</template>
<script>
import Control from "@/components/admin/Control";
export default {
  components: {
    Control
  },
  computed: {
    getData() {
      return this.$store.state.detailObj;
    }
  },
  created() {
    this.$store.commit("detailData", this.$route.params.id);
  }
};
</script>
<style scoped>
</style>