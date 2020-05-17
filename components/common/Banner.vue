<template>
    <div class="banner-box">
      <p>NUXT.JS & FIREBASE</p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 200px;
  background-color: #3bb78f;
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
  position: relative;
  display: block;
}
.banner-box p{
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 0;
  color: white;
  z-index: 99;
  transform: translate(-50%, -50%);
  font-size: 55px;
  font-weight: bold;
}
</style>