<template>
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
        <h3 class="text-3xl">{{ item.savol }}</h3>
        <hr class="bg-white m-2" />

        <ol class="pl-4 py-2">
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[0].correct"
              v-model="checkedNames0"
            />
            {{ item.javoblar[0].variant }}
          </li>
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[1].correct"
              v-model="checkedNames1"
            />
            {{ item.javoblar[1].variant }}
          </li>
          <li class="my-2">
            <input
              type="checkbox"
              :value="item.javoblar[2].correct"
              v-model="checkedNames2"
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
</template>

<script>
var quiz2 = [
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
];
export default {
  name: "TopshiriqlarTest2",

  data() {
    return {
      quiz2: quiz2,
      checkedNames0: "",
      checkedNames1: "",
      checkedNames2: "",
      showSavol: 0,
      togrijavoblar: 0,
      natijalar: false,
      natijabtnshow:false
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
        console.log(this.togrijavoblar);
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