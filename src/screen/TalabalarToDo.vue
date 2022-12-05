<template>
  <div class="containerbox">
    <div class="w-2/3 border-4 p-5 boxtodo">
      <h3 class="text-center">Talabalar ro'yhati</h3>
      <div class="flex flex-row justify-end mb-5  "   >
        <label for="search" class="mr-5 mt-1">Search</label>
        <input id="search" type="text" class="border-4 outline-none" v-model="search" placeholder="SEARCH" @input="SearchInput">
      </div>

      <div class="flex  flex-col justify-center mb-3 align-middle "  >
        <div class="text-center" >Kurslar bo'yicha saralash</div>
        <div  class="flex justify-center mb-3">
          <div class="kursbox"
         :class="{'active': kursboyichasaralash == 'all'}"
         @click="kursboyichasaralash = 'all'"
         >all</div>

        <div class="kursbox"
         :class="{'active': kursboyichasaralash == 'bir'}"
         @click="kursboyichasaralash = 'bir'"
         >1</div>

        <div 
        class="kursbox"
         @click="kursboyichasaralash = 'ikki'"
         :class="{'active': kursboyichasaralash == 'ikki'}"
        >2</div>
        <div
         class="kursbox"
          @click="kursboyichasaralash = 'uch'"
         :class="{'active': kursboyichasaralash == 'uch'}"
         >3</div>
        <div 
        class="kursbox"
         @click="kursboyichasaralash = 'tort'"
         :class="{'active': kursboyichasaralash == 'tort'}"
        >4</div>
        </div>
      </div>

      <table v-if="( kursboyichasaralash == 'all')" >
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
            <button @click="edite(item.id)" class="bg-yellow-400 px-5 rounded-md">
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




      <table v-else-if="(kursboyichasaralash == 'bir') " >
        <tr>
          <th>Ism Familiya</th>
          <th>Telfon nomer</th>
          <th>Kursi</th>
          <th>Taxrirlash</th>
          <th>O'chirish</th>
        </tr>
        <tr v-for="(item, index) in saralanganbir" :key="index">
          <td>{{ item.ismi }}</td>
          <td>{{ item.telfon }}</td>
          <td>{{ item.kursi }}</td>
          <td>
            <button @click="edite(item.id)" class="bg-yellow-400 px-5 rounded-md">
              Edit
            </button>
          </td>
          <td>
            <button @click="deletetsorch(item.id)" class="bg-red-500 px-5 rounded-md">
              Delet
            </button>
          </td>
        </tr>
      </table>


      <table v-else-if="(kursboyichasaralash == 'ikki') " >
        <tr>
          <th>Ism Familiya</th>
          <th>Telfon nomer</th>
          <th>Kursi</th>
          <th>Taxrirlash</th>
          <th>O'chirish</th>
        </tr>
        <tr v-for="(item, index) in saralanganikki" :key="index">
          <td>{{ item.ismi }}</td>
          <td>{{ item.telfon }}</td>
          <td>{{ item.kursi }}</td>
          <td>
            <button @click="edite(item.id)" class="bg-yellow-400 px-5 rounded-md">
              Edit
            </button>
          </td>
          <td>
            <button @click="deletetsorch(item.id)" class="bg-red-500 px-5 rounded-md">
              Delet
            </button>
          </td>
        </tr>
      </table>

       <table v-else-if="(kursboyichasaralash == 'uch') " >
        <tr>
          <th>Ism Familiya</th>
          <th>Telfon nomer</th>
          <th>Kursi</th>
          <th>Taxrirlash</th>
          <th>O'chirish</th>
        </tr>
        <tr v-for="(item, index) in saralanganuch" :key="index">
          <td>{{ item.ismi }}</td>
          <td>{{ item.telfon }}</td>
          <td>{{ item.kursi }}</td>
          <td>
            <button @click="edite(item.id)" class="bg-yellow-400 px-5 rounded-md">
              Edit
            </button>
          </td>
          <td>
            <button @click="deletetsorch(item.id)" class="bg-red-500 px-5 rounded-md">
              Delet
            </button>
          </td>
        </tr>
      </table>

       <table v-else-if="(kursboyichasaralash == 'tort') " >
        <tr>
          <th>Ism Familiya</th>
          <th>Telfon nomer</th>
          <th>Kursi</th>
          <th>Taxrirlash</th>
          <th>O'chirish</th>
        </tr>
        <tr v-for="(item, index) in saralangantort" :key="index">
          <td>{{ item.ismi }}</td>
          <td>{{ item.telfon }}</td>
          <td>{{ item.kursi }}</td>
          <td>
            <button @click="edite(item.id)" class="bg-yellow-400 px-5 rounded-md">
              Edit
            </button>
          </td>
          <td>
            <button @click="deletetsorch(item.id)" class="bg-red-500 px-5 rounded-md">
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
            <button @click.prevent="editesorch" class="bg-blue-700 px-5">
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
      <div class="mt-4 text-red-600">
        <h3 v-if="kiriteror == 'ism'" >Isim hato kiritildi kamida uchta harftan ko'p bolishi kerak</h3>
        <h3 v-if="kiriteror == 'nomer'"  >Telfon nomeri hato kiritildi 12ta raqamdan iborat holda kiriting</h3>
        <h3 v-if="kiriteror == 'kurs'" >Talaba kursi hato kiritildi. 1 dan 4 gacha qiymat kiritolasiz</h3>
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
          id:0,
          ismi: "Sodiqov Ravshanbek",
          telfon: +9998903228001,
          kursi: 4,
        },
        {
          id:1,
          ismi: "Jhon Doe",
          telfon: +9998903228001,
          kursi: 1,
        },
        {
          id:2,
          ismi: "Eshmatov Toshmat",
          telfon: +9998903228001,
          kursi: 3,
        },
        {
          id:3,
          ismi: "Boymatov Shohabbos",
          telfon: +9998903228001,
          kursi: 2,
        },
      ],

      talabaismi: "",
      talabanomeri: "",
      talabakursi:0,

      objekt: {
        id:0,
        ismi: "",
        telfon: "",
        kursi:0,
      },

      buttonshow: false,
      indexvalu:0,
      search:"",
      todosearcheduser:[],
      kursboyichasaralash:"all",
      kiriteror :"tugri",
      id : 0
    };
  },

  mounted() {
    this.todosearcheduser = [...this.ToDo]
  },
  computed:{
      saralanganbir(){
        return this.todosearcheduser.filter(el => el.kursi == 1)
      },
       saralanganikki(){
        return this.todosearcheduser.filter(el => el.kursi == 2)
      },
       saralanganuch(){
        return this.todosearcheduser.filter(el => el.kursi == 3)
      },
       saralangantort(){
        return this.todosearcheduser.filter(el => el.kursi == 4)
      }
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
      this.objekt.id = this.ToDo.length

      if(this.talabaismi.length < 5){
        this.kiriteror = "ism"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      }else if (this.talabanomeri.length != 12) {
           this.kiriteror = "nomer"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      } else if(this.talabakursi <= 0 || this.talabakursi > 4){
         this.kiriteror = "kurs"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      }else {
        this.ToDo.push({ ...this.objekt });
        this.talabaismi = "";
      this.talabanomeri = "";
      this.talabakursi = "";
      }
      


      
      // this.objekt.ismi = ""
      // this.objekt.telfon = ""
      // this.objekt.kursi = ""
    },
    deletet: function (index) {
      this.ToDo.splice(index, 1);
    },
    deletetsorch:function(id){
        for(let i = 0 ; i <= this.ToDo.length-1 ; i++ ){
          if(this.ToDo[i].id == id){
            this.ToDo.splice(i, 1)
          }
        }
    },
    edite: function (son) {
      for(let i=0 ; this.ToDo.length-1; i++){
        if (son == this.ToDo[i].id) {
      this.buttonshow = true;
      this.talabaismi = this.ToDo[i].ismi;
      this.talabanomeri = this.ToDo[i].telfon;
      this.talabakursi = this.ToDo[i].kursi;
      this.indexvalu = i
      this.id = son
        }
      }
      
    },
    editesorch:function(){
       this.objekt.ismi = this.talabaismi;
      this.objekt.telfon = this.talabanomeri;
      this.objekt.kursi = this.talabakursi;
      this.objekt.id = this.id;


      if(this.talabaismi.length < 3){
        this.kiriteror = "ism"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      }else if (this.talabanomeri.length != 12) {
           this.kiriteror = "nomer"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      } else if(this.talabakursi <= 0 || this.talabakursi > 4){
         this.kiriteror = "kurs"
       setTimeout(() => {
       this.kiriteror = "tugti"
       }, 3000);
      }else {
        for( let i=0; i<=this.ToDo.length-1; i++){
          if(this.ToDo[i].id == this.id ){
             this.ToDo.splice(i, 1,{ ...this.objekt });
          }
        }
      this.talabaismi = "";
      this.talabanomeri = "";
      this.talabakursi = "";
      this.buttonshow = false;

      }
    },
    // joylash:function(){
    //    this.objekt.ismi = this.talabaismi;
    //   this.objekt.telfon = this.talabanomeri;
    //   this.objekt.kursi = this.talabakursi;


    //   if(this.talabaismi.length < 3){
    //     this.kiriteror = "ism"
    //    setTimeout(() => {
    //    this.kiriteror = "tugti"
    //    }, 3000);
    //   }else if (this.talabanomeri.length != 12) {
    //        this.kiriteror = "nomer"
    //    setTimeout(() => {
    //    this.kiriteror = "tugti"
    //    }, 3000);
    //   } else if(this.talabakursi <= 0 || this.talabakursi > 4){
    //      this.kiriteror = "kurs"
    //    setTimeout(() => {
    //    this.kiriteror = "tugti"
    //    }, 3000);
    //   }else {
    //   this.ToDo.splice(this.indexvalu, 1,{ ...this.objekt });
        
    //     this.talabaismi = "";
    //   this.talabanomeri = "";
    //   this.talabakursi = "";
    //   this.buttonshow = false;

    //   }





    // },
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
.kursbox{
  width: 30px;
  height: 30px;
  border: 2px solid #11111150;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
}
.kursbox.active{
  background-color:blue;
  color: #fff;
  border: 2px solid blue;
}
</style>