<template>
  <div>
    <div class="addbox mt-6" v-show="testqoshishshow">
      <div class="w-1/2 bg-teal-800 p-5 text-white">
        <h3 class="text-center text-2xl mb-5">Savolni kiriting</h3>
        <input
          type="text"
          v-model="savolkirit"
          placeholder="Savolni kiriting"
          class="w-full rounded-2xl px-8 text-black outline-none h-10"
        />
        <hr class="bg-white m-2" />

        <div>
          <div class="addboxinput">
            <input
              type="text"
              v-model="javobnikiritt1"
              placeholder="1-javobni kiriting"
              class="w-1/2 rounded-2xl px-8 text-black outline-none h-8 mt-5"
            />
            <input type="radio" :value=true v-model="status1" class="mt-2" name="javob" />
            <p>To'g'ri javobni tanlab qoying</p>
          </div>
          <hr class="bg-white m-2" />
        </div>
        <div>
          <div class="addboxinput">
            <input
              type="text"
              v-model="javobnikiritt2"
              placeholder="2-javobni kiriting"
              class="w-1/2 rounded-2xl px-8 text-black outline-none h-8 mt-5"
            />
            <input type="radio" :value=true v-model="status2" class="mt-2" name="javob" />
            <p>To'g'ri javobni tanlab qoying</p>
          </div>
          <hr class="bg-white m-2" />
        </div>

        <div>
          <div class="addboxinput">
            <input
              type="text"
              v-model="javobnikiritt3"
              placeholder="3-javobni kiriting"
              class="w-1/2 rounded-2xl px-8 text-black outline-none h-8 mt-5"
            />
            <input type="radio" :value=true v-model="status3" class="mt-2"  name="javob"/>
            <p>To'g'ri javobni tanlab qoying</p>
          </div>
          <hr class="bg-white m-2" />
        </div>

        <button
          @click="savolqoshildi()"
          class="bg-blue-800 px-6 py-1 rounded-md hover:bg-blue-500 text-white"
        >
          qo'shish
        </button>
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
      "
      v-show="!testqoshishshow"
    >
      <div
        v-for="(item, index) in quiz1"
        :key="index"
        v-show="savolnomer == index"
      >
      <div class="flex flex-row justify-between items-center mr-5">
        <h1 class="text-3xl">{{ item.savol }}</h1>
        <div>
          <button  @click="ochirish(index)" class="bg-red-700 px-5 rounded-lg" >Delete</button>
        </div>
      </div>
        <hr class="bg-white m-2" />
        <ol class="p-2">
          <li
            v-for="(javob, i) in item.javoblar"
            :key="i"
            class="mt-3 cursor-pointer"
          >
            <input
              type="radio"
              v-model="inputvalue"
              :name="index"
              :value="javob.correct"
              @change="inputbosildi"
            />
            {{ javob.variant }}
          </li>
        </ol>
        <hr class="bg-white m-2" />
        <button
          @click="bosti()"
          class="bg-red-600 px-6 py-1 rounded-md hover:bg-red-400"
          v-show="keyingisishow"
        >
          Keyingisi
        </button>
      </div>
      <div class="natijabox mt-10">
        <button
          @click="natija()"
          class="bg-green-600 px-6 py-1 rounded-md hover:bg-green-400"
          v-show="buttonnatija"
        >
          Natijani ko'rish
        </button>
        <div
          v-show="natijanikorish"
          class="flex flex-col align-middle justify-center"
        >
          <h3 class="text-center mt-4">
            Natijangiz {{ togri }}/{{ quiz1.length }}
          </h3>
          <button
            @click="refresh()"
            class="bg-yellow-600 px-6 py-1 rounded-md hover:bg-yellow-400 mt-4"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
    <div class="addbox mt-20">
      <button
        type="submit"
        v-show="!testqoshishshow"
        class="bg-blue-800 px-6 py-1 rounded-md hover:bg-blue-400 text-white"
        @click="testqoshishkaotish"
      >
        Test Savoli qo'shish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopshiriqlarTestlar",

  data() {
    return {
      quiz1: [
        {
          savol: "1-to'g'ri javobni toping",
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
              variant: "itog'ri",
              correct: true,
            },
            {
              variant: "nato'g'ri",
              correct: false,
            },
          ],
        },
        {
          savol: "3-to'g'ri javobni toping",
          javoblar: [
            {
              variant: "nato'g'ri",
              correct: false,
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
      togri: 0,
      inputvalue: "",
      savolnomer: 0,
      natijanikorish: false,
      buttonnatija: false,
      keyingisishow:false,
      savolkirit: "",
      javobnikiritt1: "",
      javobnikiritt2: "",
      javobnikiritt3: "",
      status1: false,
      status2: false,
      status3: false,
      testqoshishshow: false,
      savoljonatmassiv: {
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
      },
    };
  },

  mounted() {},

  methods: {
    bosti: function () {
      if(this.inputvalue == true || this.inputvalue == false){
        if (this.inputvalue) {
        this.togri++;
      }
      if (this.savolnomer == this.quiz1.length - 1) {
        this.buttonnatija = true;
      }
      this.savolnomer++;
      this.inputvalue = "";
      this.keyingisishow = false
      }
    },
    natija: function () {
      this.natijanikorish = true;
    },
    refresh: function () {
      this.savolnomer = 0;
      this.togri = 0;
      (this.natijanikorish = false), (this.buttonnatija = false);
    },
    savolqoshildi: function () {
      this.savoljonatmassiv.savol = this.savolkirit;
      this.savoljonatmassiv.javoblar[0].correct = this.status1;
      this.savoljonatmassiv.javoblar[0].variant = this.javobnikiritt1;
      this.savoljonatmassiv.javoblar[1].correct = this.status2;
      this.savoljonatmassiv.javoblar[1].variant = this.javobnikiritt2;
      this.savoljonatmassiv.javoblar[2].correct = this.status3;
      this.savoljonatmassiv.javoblar[2].variant = this.javobnikiritt3;
      if (!(this.savoljonatmassiv.savol == "")) {
        this.quiz1.push(JSON.parse(JSON.stringify(this.savoljonatmassiv)));
        this.savolkirit = "";
      this.javobnikiritt1 = "";
      this.javobnikiritt2 = "";
      this.javobnikiritt3 = "";
      this.status1 = false;
      this.status2 = false;
      this.status3 = false;
      }
      
      
      this.testqoshishshow = false;
    },
    testqoshishkaotish: function () {
      this.testqoshishshow = true;
      this.savoljonatmassiv.savol = "";
    },
    inputbosildi:function(){
      this.keyingisishow = true 
    },
    ochirish:function(i){
      this.quiz1.splice(i, 1)
    }
  },
};
</script>

<style scoped>
.container {
  min-height: 300px;
}
.natijabox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.addbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.addboxinput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>