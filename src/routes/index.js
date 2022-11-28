import Vue from "vue";
import Router from "vue-router"
import Testlar from "@/screen/Testlar.vue"
import LoginUchun from "@/screen/LoginUchun.vue"
import ContentUchun from "@/screen/ContentUchun.vue"
import TalabalarToDo from '@/screen/TalabalarToDo.vue'
import Forma from "@/screen/Forma.vue"
import Testlarscreen from "@/screen/TestlarScreen.vue"
import Test2 from '@/screen/Test2.vue'
import Test3 from '@/screen/Test3.vue'



Vue.use(Router)

const routes = [
    {
        path: "/",
        component: LoginUchun,
        name: "Login"
    },
    {
        path: "/test",
        component: ContentUchun,
        name: "Content",
        children:[
            {
                path: "/talabalar",
                component: TalabalarToDo,
                name: "todo"
            },
            {
                path:"/forma",
                component: Forma,
                name:"Forma"
            },
            {
                path:"/testlarscreen",
                component: Testlarscreen,
                name:"Tests",
                children:[
                    {
                        path:"/Testlar1",
                        component: Testlar,
                        name:"test1"
                    },
                    {
                        path:"/test2",
                        component: Test2,
                        name:"Test2"
                    },
                    {
                        path:"/test3",
                        component:Test3,
                        name:"Test3"
                    }
                ]
            }
        ]
    },
   


]



const router = new Router({
    routes: routes,
    mode: "history"
})

export default router