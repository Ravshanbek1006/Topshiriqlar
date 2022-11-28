<template>
    <div>
         <div class="flex justify-center nav bg-teal-700 h-12  text-white text-2xl">
           <router-link to="/talabalar"> <h3 class="cursor-pointer mx-6">Talabalar</h3></router-link>
            <router-link to="/testlarscreen"><h3 class="cursor-pointer mx-6">Testlar</h3></router-link>
            <router-link to="/forma"><h3 class="cursor-pointer mx-6">Forma</h3></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopshiriqlarNavBar',

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

<style lang="scss" scoped>

</style>