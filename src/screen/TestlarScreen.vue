<template>
  <div>
    <div class="container1">
      <router-link to="/Testlar1"  class="
            bg-teal-600
            w-1/4
            m-5
            h-20
            text-center text-white text-2xl
            mt-5
            py-2
            rounded-lg
            cursor-pointer
          ">
        <div
         
        >
          Faqat bitta javob belgilanadigan testlar
        </div>
      </router-link>
      <router-link to="/test2"  class="
            bg-teal-600
            w-1/4
            m-5
            h-20
            text-center text-white text-2xl
            mt-5
            py-2
            rounded-lg
            cursor-pointer
          ">
        <div
         
        >
          Ikkita va undan ortiq javaob belgilasa boladigan testlar
        </div>
      </router-link>
      <router-link to="test3"  class="
            bg-teal-600
            w-1/4
            m-5
            h-20
            text-center text-white text-2xl
            mt-5
            py-2
            rounded-lg
            cursor-pointer
          ">
        <div
         
        >
          Javobi yozma beriladigan testlar
        </div>
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "TopshiriqlarTestlarScreen",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
</style>