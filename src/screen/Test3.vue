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
    <h3 class="ml-2 text-center mb-4">Javobingizni yozma holatda kiriting</h3>
    <hr class="bg-white m-2" />
    <div
      v-for="(item, index) in quiz3"
      :key="index"
      v-show="testcardshow == index"
    >
      <h3 class="mb-3">{{ item.savol }}</h3>
      <input
        type="text"
        class="text-black outline-none w-96 rounded-2xl px-4"
        v-model="yozmajavob"
      />
      <br />
      <button
        @click="keyingisigasakra(index)"
        class="bg-red-600 px-6 py-1 rounded-md mt-4 hover:bg-red-400"
      >
        Keyingisi
      </button>
      <h3 class="text-white" >"To'g'ri javob" shu javobka tekshiradi</h3>
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
    };
  },

  mounted() {},

  methods: {
    keyingisigasakra: function (index) {
      if (this.yozmajavob == this.quiz3[index].javoblar) {
        this.togrijavoblar++;
      }
      this.testcardshow++;
      if (this.testcardshow == this.quiz3.length) {
        this.korinma = true;
        this.yozmajavob = "";
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