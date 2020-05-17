<template>
  <section>
    <div class="control-box">
      <h4>
        {{post == true ? "Add Post" : "Edit Post"}}
        <button
          class="btn btn-warning"
          @click="backHistory"
        >
          <b>
            <i class="fa fa-angle-left"></i> BACK
          </b>
        </button>
      </h4>
      <br />
      <div class="form-group">
        <label>
          <b>{{post == true ? "Enter Name:" : "Edit Name:"}}</b>
        </label>
        <input type="text" class="form-control" v-model="postLoad.title" />
      </div>
      <div class="form-group">
        <label>
          <b>{{post == true ? "Enter Rank:" : "Edit Rank:"}}</b>
        </label>
        <input type="text" class="form-control" v-model="postLoad.rank" />
      </div>
      <div class="form-group">
        <label>
          <b>{{post == true ? "Enter Description:" : "Edit Description:"}}</b>
        </label>
        <textarea class="form-control" rows="5" v-model="postLoad.desc"></textarea>
      </div>
      <button class="btn btn-primary" @click="postControl">
        <b>
          SUBMIT
          <i class="fa fa-check"></i>
        </b>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postLoad: {
        title: "",
        rank: "",
        desc: ""
      }
    };
  },
  props: {
    post: {
      required: true,
      type: Boolean
    },
    detail: {
      required: false,
      type: Object
    }
  },
  methods: {
    backHistory() {
      window.history.back();
    },
    postControl() {
      if (this.post) {
        let getResult = this.$store.dispatch("postFB", this.postLoad);
        getResult.then(res => {
           this.$store.commit("pushFetch", {id: res.data.name, ...this.postLoad});
           if(res.status == 200){
            this.$router.push("/admin");
           }
           else{}
        });
      } 
      
      else {
        let getResult = this.$store.dispatch("editFun", this.postLoad);
        getResult.then(res => {
          if (res.status == 200) {
            this.$router.push("/admin");
          } 
          else {}
        });
      }
    }
  },
  created() {
    this.postLoad = this.detail;
  }
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: #990000;
  background-image: linear-gradient(147deg, #990000 0%, #ff0000 74%);
}
.control-box {
  width: 500px;
  height: 520px;
  background-color: white;
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
</style>