<template>
  <div class="containerbox">
    <div class="w-2/3 border-4 p-5 boxtodo">
      <h3 class="text-center">Talabalar ro'yhati</h3>
      <div class="flex flex-row justify-end mb-5  "   >
        <label for="search" class="mr-5 mt-1">Search</label>
        <input id="search" type="text" class="border-4 outline-none" v-model="search" placeholder="SEARCH" @input="SearchInput">
      </div>

      <table>
        <tr>
          <th>Ism Familiya</th>
          <th>Telfon nomer</th>
          <th>Kursi</th>
          <th>Taxrirlash</th>
          <th>O'chirish</th>
        </tr>
        <tr v-for="(item, index) in todosearcheduser" :key="index">
          <td>{{ item.ismi }}</td>
          <td>{{ item.telfon }}</td>
          <td>{{ item.kursi }}</td>
          <td>
            <button @click="edite(index)" class="bg-yellow-400 px-5 rounded-md">
              Edit
            </button>
          </td>
          <td>
            <button @click="deletet(index)" class="bg-red-500 px-5 rounded-md">
              Delet
            </button>
          </td>
        </tr>
      </table>
      <div style="margin-top: 50px" v-show="buttonshow">
        <h3>Tahrirlash</h3>
        <tr>
          <td>
            <input
              class="outline-none"
              type="text"
              v-model="talabaismi"
              placeholder="Ism kiriting"
            />
          </td>
          <td>
            <input
              class="outline-none"
              type="number"
              v-model="talabanomeri"
              placeholder="+998 XX xxx xx xx"
            />
          </td>
          <td>
            <input
              class="outline-none"
              type="number"
              v-model="talabakursi"
              placeholder="kursini kiriting"
            />
          </td>
          <td>
            <button @click.prevent="joylash" class="bg-blue-700 px-5">
              Joylash
            </button>
          </td>
        </tr>
      </div>
      <div class="mt-10" v-show="!buttonshow">
        <h3>Talaba qo'shish</h3>
        <div>
          <tr>
            <td>
              <input
                class="outline-none"
                type="text"
                v-model="talabaismi"
                placeholder="Ism kiriting"
              />
            </td>
            <td>
              <input
                class="outline-none"
                type="number"
                v-model="talabanomeri"
                placeholder="+998 XX xxx xx xx"
              />
            </td>
            <td>
              <input
                class="outline-none"
                type="number"
                v-model="talabakursi"
                placeholder="kursini kiriting"
              />
            </td>
            <td>
              <button @click.prevent="Talabaqosh" class="bg-green-700 px-5">
                Qo'shish
              </button>
            </td>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopshiriqlarTalabalarToDo",

  data() {
    return {
      ToDo: [
        {
          ismi: "Sodiqov Ravshanbek",
          telfon: +9998903228001,
          kursi: 4,
        },
        {
          ismi: "Jhon Doe",
          telfon: +9998903228001,
          kursi: 1,
        },
        {
          ismi: "Eshmatov Toshmat",
          telfon: +9998903228001,
          kursi: 3,
        },
      ],

      talabaismi: "",
      talabanomeri: "",
      talabakursi: "",

      objekt: {
        ismi: "",
        telfon: "",
        kursi: "",
      },

      buttonshow: false,
      indexvalu:0,
      search:"",
      todosearcheduser:[]
    };
  },

  mounted() {
    this.todosearcheduser = [...this.ToDo]
  },
  watch:{
    search(){
      this.SearchInput()
    },
    ToDo:{
      deep:true,
      handler(){
      this.todosearcheduser = [...this.ToDo]

      }
    }
  },
  methods: {
    Talabaqosh: function () {
      this.objekt.ismi = this.talabaismi;
      this.objekt.telfon = this.talabanomeri;
      this.objekt.kursi = this.talabakursi;
      this.ToDo.push({ ...this.objekt });

      this.talabaismi = "";
      this.talabanomeri = "";
      this.talabakursi = "";
      // this.objekt.ismi = ""
      // this.objekt.telfon = ""
      // this.objekt.kursi = ""
    },
    deletet: function (index) {
      this.ToDo.splice(index, 1);
    },
    edite: function (index) {
      this.buttonshow = true;
      this.talabaismi = this.ToDo[index].ismi;
      this.talabanomeri = this.ToDo[index].telfon;
      this.talabakursi = this.ToDo[index].kursi;
      this.indexvalu = index
    },
    joylash:function(){
       this.objekt.ismi = this.talabaismi;
      this.objekt.telfon = this.talabanomeri;
      this.objekt.kursi = this.talabakursi;
      this.ToDo.splice(this.indexvalu, 1,{ ...this.objekt });

      this.buttonshow = false;


      this.talabaismi = "";
      this.talabanomeri = "";
      this.talabakursi = "";
    },
     SearchInput:function(){
      this.todosearcheduser = this.ToDo.filter(el => {
        return el.ismi.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
};
</script>

<style  scoped>
.containerbox {
}
.boxtodo {
  margin: 50px auto;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 60px;
}
td {
  width: 20%;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>