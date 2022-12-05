<template>
  <div>
    <div
      class="
        bg-teal-800
        w-2/4
        text-white
        mx-auto
        mt-32
        p-4
        border-teal-900 border-4
        rounded-2xl
        shadow-rxl
        container
      "
      v-show="savolboxshow"
    >
      <h3 class="ml-2 text-center mb-4">Javobingizni yozma holatda kiriting</h3>
      <hr class="bg-white m-2" />
      <div
        v-for="(item, index) in quiz3"
        :key="index"
        v-show="testcardshow == index"
      >
        <div class="flex justify-between items-center w-full">
          <h3 class="mb-3">{{ item.savol }}</h3>
          <button
            class="bg-red-800 px-5 py-1 rounded-lg"
            @click="deletequiz(index)"
          >
            Delete
          </button>
        </div>
        <input
          type="text"
          class="text-black outline-none w-96 rounded-2xl px-4"
          v-model="yozmajavob"
          placeholder="Javobingizni kiriting"
        />
        <br />
        <button
          @click="keyingisigasakra(index)"
          class="bg-red-600 px-6 py-1 rounded-md mt-4 hover:bg-red-400"
        >
          Keyingisi
        </button>
        <h3 class="text-white mt-5">"To'g'ri javob" shu javobka tekshiradi</h3>
      </div>
      <div class="contentbox">
        <button
          @click="natijalaringiz()"
          v-show="korinma"
          class="bg-green-600 px-6 py-1 rounded-md hover:bg-green-400 mt-5"
        >
          Natijangizni ko'ring
        </button>
        <div v-show="javobcardkorin" class="mt-5 contentbox">
          <h3>Natijangiz {{ togrijavoblar }}/{{ quiz3.length }}</h3>
          <button
            class="bg-yellow-600 px-6 py-1 rounded-md hover:bg-yellow-400 mt-4"
            @click="refreshlar()"
          >
            Refresh
          </button>
        </div>
      </div>
      <div class="flex justify-center"> 
        <button  @click="showbox" class="bg-blue-800 px-5 py-1 mt-10 rounded-lg" >Test savoli qo'shish</button>  
      </div>
    </div>


    <div
      class="
        bg-teal-800
        w-2/4
        text-white
        mx-auto
        mt-32
        p-4
        border-teal-900 border-4
        rounded-2xl
        shadow-rxl
        container
        items-center
        flex
        flex-col
        mb-10
      "
      v-show="!savolboxshow"
    >
      <h3 class="mb-4">Yangi savol qo'shing:</h3>
      <input type="text" v-model="yangisavol.savol" placeholder="Savolni kiriting" 
        class="text-black px-4 outline-none w-full h-10 rounded-lg "
      >
      <input type="text"
        v-model="yangisavol.javoblar"
        placeholder="To'g'ri javobni kiriting"
        class="w-1/2 h-8 rounded-lg px-8  mt-8 outline-none text-black"
      >
      <div>
        <button @click="yangisavolqosh" class="bg-blue-800 px-5 py-1 rounded-lg mt-5" >Qo'shish</button>
      </div>

  </div>
  </div>
</template>

<script>
var quiz3 = [
  {
    savol: "1-to'g'ri javobni toping",
    javoblar: "To'g'ri javob",
  },
  {
    savol: "2-to'g'ri javobni toping",
    javoblar: "To'g'ri javob",
  },
  {
    savol: "3-to'g'ri javobni toping",
    javoblar: "To'g'ri javob",
  },
];
export default {
  name: "TopshiriqlarTest3",

  data() {
    return {
      quiz3: quiz3,
      testcardshow: 0,
      yozmajavob: "",
      korinma: false,
      togrijavoblar: 0,
      javobcardkorin: false,
      yangisavol:{
        savol:"",
        javoblar:""
      },
      savolboxshow:true,

    };
  },

  mounted() {},

  methods: {
    keyingisigasakra: function (index) {
      if(this.yozmajavob.length > 0){
        if (this.yozmajavob == this.quiz3[index].javoblar) {
        this.togrijavoblar++;
      }
      this.testcardshow++;
        this.yozmajavob = ""
      if (this.testcardshow == this.quiz3.length) {
        this.korinma = true;
        this.yozmajavob = "";
      }
      }
    },
    natijalaringiz: function () {
      this.javobcardkorin = true;
    },
    refreshlar: function () {
      this.testcardshow = 0;
      this.yozmajavob = "";
      this.korinma = false;
      this.togrijavoblar = 0;
      this.javobcardkorin = false;
    },
    deletequiz: function (i) {
      this.quiz3.splice(i, 1);
    },
    yangisavolqosh: function(){
      if(this.yangisavol.savol.length > 0 && this.yangisavol.javoblar.length > 0){
          this.quiz3.push({...this.yangisavol})
          this.yangisavol.savol = ""
          this.yangisavol.javoblar = ""
          this.savolboxshow = true
      }
    },
    showbox:function(){
      this.savolboxshow = false
    },
    
  },
};
</script>

<style scoped>
.container {
  min-height: 300px;
}
.contentbox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>