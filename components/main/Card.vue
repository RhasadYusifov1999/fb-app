<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card">
      <div class="ground-item"></div>
      <div class="circle-pp">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt />
      </div>
      <p class="title">
        <span>Name:</span>
        <b>{{post.title}}</b>
      </p>
      <p class="title">
        <span>Rank:</span>
        <b>
          {{post.rank}}
          <i class="fa fa-code"></i>
        </b>
      </p>
      <br />
      <div class="row">
        <div class="col-md-4"  v-if="!main">
          <button class="btn btn-warning" @click="$router.push('/post/'+post.id)">
            <b>
              View
              <i class="fa fa-eye"></i>
            </b>
          </button>
        </div>
        <div class="col-md-4" v-if="main"> 
          <button class="btn btn-primary" @click="$router.push('/admin/'+post.id)">
            <b>
              Edit
              <i class="fa fa-pencil"></i>
            </b>
          </button>
        </div>
        <div class="col-md-4" v-if="main">
          <button class="btn btn-danger" @click="trashCard(post.id)">
            <b>
              Trash
              <i class="fa fa-trash"></i>
            </b>
          </button>
        </div>
      </div>
      <div class="preview">
        <i class="fa fa-eye eye"></i>
        <p
          class="desc"
        >{{post.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    main: {
      required: true,
      type: Boolean
    },
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    trashCard(arg){
       this.$store.dispatch("trashCard", arg);
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 370px;
  background: #ffffff;
  box-shadow: 3px 4px 16px rgba(2, 169, 181, 0.2);
  border-radius: 8px;
  padding: 15px;
  overflow: hidden;
  margin-bottom: 40px;
  padding-top: 120px;
}
.ground-item {
  width: 100%;
  position: absolute;
  top: 0;
  left: -60px;
  height: 100px;
  transform: skew(-50deg);
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  padding: 20px;
  border-radius: 10px;
}
.circle-pp {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  top: 30px;
  box-shadow: 0px 0px 15px 2px lightblue;
  right: 40px;
  position: absolute;
  overflow: hidden;
}
.circle-pp img {
  width: 100%;
  height: 100%;
}
.title {
  color: black;
  margin: 0;
  font-size: 16px;
  margin-bottom: 20px;
}
.title span {
  padding-right: 10px;
}
.preview {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 15px;
  cursor: pointer;
  right: 15px;
  z-index: 9999;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  border-radius: 50%;
  overflow: hidden;
  transition: 0.5s;
}
.preview:hover {
  transition: 0.5s;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 20px;
  border-radius: inherit;
}
.preview p.desc {
  color: white;
  font-weight: bold;
  margin: 0;
  line-height: 27px;
  font-family: sans-serif;
  display: none;
}
.preview {
  text-align: center;
  line-height: 50px;
}
.preview:hover > .desc {
  display: block;
}
.preview:hover > .eye {
  display: none;
}
.eye {
  font-size: 24px;
  color: white;
}
</style>