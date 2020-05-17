<template>
  <section>
    <div class="container">
      <div class="text-center">
        <br />
        <br />
        <button class="btn btn-danger" @click="$router.push('/admin/new-post')">
          <b>
            NEW POST
            <i class="fa fa-plus"></i>
          </b>
        </button>
      </div>
    </div>
    <List :fetch="fetchPost" :main="true" />
  </section>
</template>

<script>
import List from "@/components/main/List";
export default {
  layout: "Admin",
  head() {
    return {
      title: "ADMIN NUXT.JS"
    };
  },
  components: {
    List
  },
  computed: {
    fetchPost(){
      return this.$store.getters.allPost;
    }
  }
};
</script>

<style >
</style>