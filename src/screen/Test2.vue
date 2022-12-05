<template>
  <div>
    <div v-show="!testqoshishshow">
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
  >
    <div>
      <h3 class="ml-2 text-center mb-4">
        Ikkita va undan ko'p tog'ri javob belgilash mumkin
      </h3>
      <div
        v-for="(item, index) in quiz2"
        :key="index"
        v-show="showSavol == index"
      >
      <div  class="flex flex-row justify-between items-center mr-5">
        <h3 class="text-3xl">{{ item.savol }}</h3>
        <button  @click="ochirish(index)" class="bg-red-700 px-5 rounded-lg">delete</button>
      </div>
        <hr class="bg-white m-2" />

        <ol class="pl-4 py-2">
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[0].correct"
              v-model="checkedNames0"
              @change="(keyingisishow = true)"
            />
            {{ item.javoblar[0].variant }}
          </li>
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[1].correct"
              v-model="checkedNames1"
              @change="(keyingisishow = true)"

            />
            {{ item.javoblar[1].variant }}
          </li>
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[2].correct"
              v-model="checkedNames2"
              @change="(keyingisishow = true)"

            />
            {{ item.javoblar[2].variant }}
          </li>
        </ol>
        <hr class="bg-white m-2" />
        <button
          @click="
            keyingisi(
              item.javoblar[0].correct,
              item.javoblar[1].correct,
              item.javoblar[2].correct
            )
          "
          class="bg-red-600 px-6 py-1 rounded-md hover:bg-red-400"
          v-show="keyingisishow"
        >
          Keyingisi
        </button>
      </div>
      <div class="mt-5 boxjavoblar">
       <button
        @click="natijanikorish()" 
        v-show="natijabtnshow"
        class="bg-green-600 px-6 py-1 rounded-md hover:bg-green-400"
        >Natijangizni ko'ring</button>

        <div v-show="natijalar" class="boxjavoblar">
          <h3 class="text-center mt-8 text-3xl">
            Natijangiz {{ togrijavoblar }}/{{ quiz2.length }}
          </h3>
          <button
            class="bg-yellow-600 px-6 py-1 rounded-md hover:bg-yellow-400 mt-4"
            @click="qaytaboshlash()"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
   </div>
   <div class="flex justify-center mt-5">
    <button @click="(testqoshishshow = true)" class="bg-blue-800 px-5 text-white rounded-lg py-2">test savollari qo'shish</button>
   </div>
   </div>

   


   <div
   v-show="testqoshishshow"
    class="  bg-teal-800
      w-2/4
      text-white
      mx-auto
      mt-32
      p-4
      border-teal-900 border-4
      rounded-2xl
      shadow-rxl
      container mb-10" 
      
      >
      <h3 class="text-center text-2xl mb-4">Savol kiriting:</h3>
      <input 
      type="text"
      v-model="savolobjekt.savol"
      placeholder="Savolni kiriting"
      class="w-full h-10 rounded-lg px-4 outline-none text-black mb-4"
      >
        <hr class="bg-white m-2" />

      <div class="flex flex-col items-center mt-3 ">
        <div class="flex flex-col items-center mt-3 w-full border-b-2 pb-2 ">
         <input 
         type="text"
         v-model="savolobjekt.javoblar[0].variant"
         placeholder="Birinchi javobni kiriting"
         class="w-1/2 h-8 rounded-lg px-4 outline-none text-black"
         >
         <input type="radio" :value=true v-model="savolobjekt.javoblar[0].correct" class="mt-2" />
         <p>To'g'ri javobni belgilang</p>
        </div>

        <div class="flex flex-col items-center mt-3 w-full border-b-2 pb-2 ">
         <input 
         type="text"
         v-model="savolobjekt.javoblar[1].variant"
         placeholder="Birinchi javobni kiriting"
         class="w-1/2 h-8 rounded-lg px-4 outline-none text-black"
         >
         <input type="radio"  v-model="savolobjekt.javoblar[1].correct" class="mt-2" />
         <p>To'g'ri javobni belgilang</p>
        </div>

        <div class="flex flex-col items-center mt-3 w-full border-b-2 pb-2 ">
         <input 
         type="text"
          v-model="savolobjekt.javoblar[2].variant"
         placeholder="Birinchi javobni kiriting"
         class="w-1/2 h-8 rounded-lg px-4 outline-none text-black"
         >
         <input type="radio"  v-model="savolobjekt.javoblar[2].correct" class="mt-2" />
         <p>To'g'ri javobni belgilang</p>
        </div>
        <div class="mt-4 ">
          <button @click="testqoshish" class="bg-blue-800 px-5 py-1 rounded-lg">Savolni qo'shilsin</button>
        </div>


       </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: "TopshiriqlarTest2",

  data() {
    return {
      quiz2: [
  {
    savol: "1-to'g'ri javobni toping",
    javoblar: [
      {
        variant: "tog'ri",
        correct: true,
      },
      {
        variant: "tog'ri",
        correct: true,
      },
      {
        variant: "nato'g'ri",
        correct: false,
      },
    ],
  },
  {
    savol: "2-to'g'ri javobni toping",
    javoblar: [
      {
        variant: "nato'g'r",
        correct: false,
      },
      {
        variant: "tog'ri",
        correct: true,
      },
      {
        variant: "tog'ri",
        correct: true,
      },
    ],
  },
  {
    savol: "3-to'g'ri javobni toping",
    javoblar: [
      {
        variant: "tog'ri",
        correct: true,
      },
      {
        variant: "nato'g'ri",
        correct: false,
      },
      {
        variant: "tog'ri",
        correct: true,
      },
    ],
  },
],
      checkedNames0: "",
      checkedNames1: "",
      checkedNames2: "",
      showSavol: 0,
      togrijavoblar: 0,
      natijalar: false,
      natijabtnshow:false,
      testqoshishshow:false,
      keyingisishow:false,

      savolobjekt:{
        savol: "",
          javoblar: [
            {
              variant: "",
              correct: false,
            },
            {
              variant: "",
              correct: false,
            },
            {
              variant: "",
              correct: false,
            },
          ],
      }
    };
  },

  mounted() {},

  methods: {
    keyingisi: function (val0, val1, val2) {
      if (
        this.checkedNames0 == val0 &&
        this.checkedNames1 == val1 &&
        this.checkedNames2 == val2
      ) {
        this.togrijavoblar++;
        this.keyingisishow = false
      }
      if(this.showSavol == this.quiz2.length-1){
        console.log("salom");
        this.natijabtnshow = true 
      }
      this.checkedNames0 = "";
      this.checkedNames1 = "";
      this.checkedNames2 = "";
      this.showSavol++;
    },
    qaytaboshlash: function () {
      this.showSavol = 0;
      this.togrijavoblar = 0;
      this.natijabtnshow = false
      this.natijalar = false
      console.log("salom");
    },
    natijanikorish:function(){
            this.natijalar = true
    },
    ochirish:function(i){
      this.quiz2.splice(i , 1)
    },
    testqoshish:function(){
      if(this.savolobjekt.savol.length > 0 && 
      this.savolobjekt.javoblar[0].variant.length > 0 &&
      this.savolobjekt.javoblar[1].variant.length > 0 &&
      this.savolobjekt.javoblar[2].variant.length > 0
      ){
          this.quiz2.push( JSON.parse(JSON.stringify(this.savolobjekt)))
          

          this.savolobjekt.savol = ""
          this.savolobjekt.javoblar[0].variant = ""
          this.savolobjekt.javoblar[0].correct = false
          this.savolobjekt.javoblar[1].variant = ""
          this.savolobjekt.javoblar[1].correct = false
          this.savolobjekt.javoblar[2].variant = ""
          this.savolobjekt.javoblar[2].correct = false
          this.testqoshishshow = false
      }
    }
  },
};
</script>

<style scoped>
.container {
  min-height: 300px;
}
.boxjavoblar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>