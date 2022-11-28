<template>
    <div>
        <nav-bar/>
        <router-view/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: 'ContentUchun',
     components:{
        NavBar
     },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.nav{
    align-items: center;
}
</style>