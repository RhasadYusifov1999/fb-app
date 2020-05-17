<template>
  <section>
    <div class="detail">
      <button class="btn btn-danger" @click="backHistory">
        <b>
          <i class="fa fa-angle-left"></i> Back
        </b>
      </button>
      <br />
      <br />
      <h4>
        Name:
        <b>{{data.title}}</b>
      </h4>
      <br />
      <h5>
        Rank:
        <b>{{data.rank}}</b>
      </h5>
      <br />
      <span>{{data.desc}}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },  
  methods: {
    backHistory() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
section {
  background-color: #63d471;
  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);
  width: 100%;
  height: 100vh;
  position: relative;
}
.detail {
  position: absolute;
  padding: 30px;
  width: 600px;
  background-color: white;
  left: 50%;
  top: 50%;
  height: 400px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  overflow: auto;
}
</style>