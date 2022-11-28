<template>
  <div
    class="loginbox w-1/4 rounded-lg border-4 p-5 bg-teal-600 border-teal-900"
  >
  <h3 class="text-center text-white text-2xl">Welcom</h3>
    <div class="m-3">
      <label class="text-white" for="login">Loginingizni kiriting:</label>
      <br />
      <input
        id="login"
        type="text"
        class="rounded-lg px-4 outline-none p-1"
        placeholder="Login"
        v-model="loginmodul"
      />
    </div>
    <div class="m-3">
      <label class="text-white" for="parol">Parolingizni kiriting</label>
      <br />
      <input
        id="parol"
        :type="Inputtype"
        class="rounded-lg px-4 outline-none p-1"
        placeholder="password"
        v-model="passwordmodul"
      />
      <button  @click="hidepasvord">
      <span
        v-if="!showlabel"
        class="bg-yellow-600 rounded-lg text-white cursor-pointer"
        style="padding: 6px"
       
        >show</span
      >
      <span
        v-else
        class="bg-yellow-600 rounded-lg text-white cursor-pointer"
        style="padding: 6px"
        >hide</span
      >
      </button>
    </div>
    <div style="display: flex; justify-content: center;">
        <button @click="gocantent" class="bg-blue-700 px-5 text-white rounded-lg" >Kirish</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginUchun",

  data() {
    return {
      showlabel: false,
      Inputtype:"password",
      loginmodul:"",
      passwordmodul:'',
      tekshirlogin:"Ravshanbek",
      tekshiepassword:12345678
    };
  },

  mounted() {},

  methods: {
    hidepasvord:function(){
        console.log("salom");
        this.Inputtype = this.Inputtype === "text" ? "password" : "text"
        this.showlabel = this.showlabel === true ? false : true
    },
    gocantent:function(){
      if(this.loginmodul == this.tekshirlogin && this.passwordmodul == this.tekshiepassword){
        this.$router.push("/test")
      }
    }
  },
};
</script>

<style  scoped>
.loginbox {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
</style>