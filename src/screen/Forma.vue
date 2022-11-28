<template>
  <div class="container bg-teal-700 w-1/4 p-5 rounded-2xl shadow-2xl">
    <form >
      <h1 class="text-white text-2xl text-center mb-6">Ro'yxattan o'tish</h1>
      <div class="boxinput">
        <label class="text-white" for="isim">Ismingizni kiriting:</label>
        <br>
        <input
          :id="isim"
          type="text"
          class="outline-none mt-2 rounded-sm px-4"
          placeholder="Name"
          v-model="name"
          required
        />
        <br/>
        <h3 v-show="ismshow" >Kamida uchta harftan iborat bo'lishi kerak</h3>
      </div>

      <div class="mt-5 boxinput">
        <label for="phonenumber" class="text-white "
          >Telfon raqamingizni kiriting:</label
        >
        <br/>
        <input
          :id="phonenumber"
          type="number"
          class="outline-none mt-2 rounded-sm px-4"
          placeholder="+998 xx xxx xx xx"
          v-model="telnomer"
          required
        />
        <br>
        <h3 v-show="nomerhato" >Nomer xato kiritildi</h3>
      </div>

      <div class="mt-5 boxinput">
        <label for="pasport" class="text-white"
          >Pasport raqamingizni kiriting:</label
        >
        <br />
        <input
          :id="pasport"
          type="text"
          class="outline-none mt-2 rounded-sm px-4"
          placeholder="AB 123 45 67"
          v-model="pasportseriya"
        />
        <br>
        <h3 v-show="pasportshow" >Pasport nomeringizni hato bkirittingiz</h3>
      </div>

      <div class="mt-5 boxinput">
        <label for="tugilgan" class="text-white"
          >Tug'igan sanangizni  kiriting:</label
        >
        <br />
        <input
          :id="tugilgan"
          type="text"
          class="outline-none mt-2 rounded-sm px-4"
          placeholder="28-11-2022"
          v-model="tugilgan"
        />
        <br>
        <h3 v-show="tugilgansanashow" >Pasport nomeringizni hato bkirittingiz</h3>
      </div>

     

      <button @click.prevent="jonatish" class="mt-8 text-white bg-blue-700 px-5 rounded-md " >jonat</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TopshiriqlarForma",

  data() {
    return {
        telnomer:"",
        nomerhato:false,
        name:"",
        ismshow:false,
        pasportseriya:"",
        pasportshow:false,
        tugilgan:"",
        tugilgansanashow:false
    };
  },

  mounted() {},

  methods: {
    jonatish:function(){
        console.log("salom");
         if(this.name.length <= 4 ){
           this.ismshow = true
            setTimeout(() => {
            this.ismshow = false
            }, 3000);
        }
        if(!(this.telnomer.length == 12)){
            this.nomerhato = true
            setTimeout(() => {
            this.nomerhato = false
            }, 3000);
        }
        if(!(this.pasportseriya.length == 9)){
            this.pasportshow = true
            setTimeout(() => {
            this.pasportshow = false
            }, 3000);
        }
        if(!(this.tugilgan.length == 10)){
            this.tugilgansanashow = true
            setTimeout(() => {
            this.tugilgansanashow = false
            }, 3000);
        }
       
    }
  },
};
</script>

<style scoped>
.container {
  margin: 50px auto;
}
h3{
  color: red;
}
h3{
  position: absolute;
  left: 5;
  bottom:-20px;
  font-size: 12px;
}
.boxinput{
  position: relative;
}
</style>