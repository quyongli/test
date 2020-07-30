<template>
    <div>
        <data-pick :date = 'date' @choose-date = 'chooseDate'/>
    </div>
</template>
<script>
import dataPick from './dataPick';
export default {
    components:{
        dataPick,
    },
    data(){
        return {
            date: new Date()
        }
    },
    methods:{
        chooseDate(date){
            this.date = date;
        }
    }
}
</script>
<style scoped>

</style>