<template>
    <!-- <div class="pick" >
        <date-timplate :date="date" @change-date = 'changeDate'/>
    </div> -->
    <div class="pick" >
        <date-timplate :date='date' @changeD="changeDate"/>
    </div>
</template>
<script>
import dateTimplate from './dateTimplate'
export default {
    components:{
        'date-timplate':dateTimplate
    },
    data(){
        return {
            date:new Date()
        }
    },
    methods:{
        changeDate(date){
            this.date = date;
        }
    }
}

// import dateTimplate from './dateTimplate'
// export default {
//     data(){
//         return{
//             date:new Date()
//         }
//     },
//     components:{
//         'date-timplate':dateTimplate
//     },
//     methods:{
//         changeDate(day){
//             this.date = day;
//         }
//     }
// }
</script>
<style scoped>
@import url('./assin/font.css');

.pick{
    position: relative;
    font-family: '微软雅黑';
}



</style>