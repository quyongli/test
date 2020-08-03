<template>
<div class="pick-in" v-change-page>
    <div class="pick-input">
        <span class="icon icon-calendar"></span>
        <input type="text" 
          :value="chooseDate"
            />
    </div>
    <div class="pick-area" v-if="showFalg">
        <div class="pick-triangle"></div>
        <div class="pick-content">
            <div class="pick-head">
                <span class="icon icon-pre-year"></span>
                <span class="icon icon-pre-day"></span>
                <span class="show-day">
                    {{ showDate.year }} 年 {{  showDate.month  + 1 }} 月
                </span>
                <span class="icon icon-next-day"></span>
                <span class="icon icon-next-year"></span>
            </div>
            <div class="pick-body">
                <div class="pick-week">
                    <span
                    v-for="week in ['日','一','二','三','四','五','六']"
                    :key= 'week'
                    > {{ week }} </span>
                </div>
                <div class="pick-days">
                    <span
                        v-for='day in days'
                        :key='day.getTime()'
                        :class="{
                            'grey':isCur(day).month,
                            'choose':isCur(day).choose,
                            'theDay':isCur(day).theDay
                        }"
                        @click="onchooseDay(day)"
                    > {{ day.getDate() }} </span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    directives:{
        'change-page':{
            bind(el,binding,vnode){
               const vm = vnode.context;
                console.log(el,binding,vnode,vm)
                document.onclick = function(e){
                    // const target = e.context;
                    const flag = el.contains(e.target)
                    if(flag && !vm.showFalg){
                        vm.showFalg = true;
                    }else if(!flag && vm.showFalg){
                        vm.showFalg = false;
                    }
                }
            }
        }
    },
    props:{
        date:{
            type:Date,
            defaults:()=> new Date()
        }
    },
    data(){
        return {
            showDate:{
                year:0,
                month:0,
                day:0,
                week:0
            },
            showFalg:false
        }
    },
    created(){
        this.showDate = this.yearMonthDay(this.date);
    },
    methods:{
        yearMonthDay(date){
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const week = date.getDay();
            return {year,month,day,week}
        },
        isCur(date){
            const {year,month,day} = this.yearMonthDay(date);
            const {year:curYear,month:curMonth} = this.showDate;
            const {year:chooseYear,month:chooseMonth,day:chooseDay} = this.yearMonthDay(this.date);
            const {year:theYear,month:theMonth,day:theDay} = this.yearMonthDay(new Date())
            return {
                month:year === curYear && month !== curMonth,
                choose:day === chooseDay && year === chooseYear && month === chooseMonth,
                theDay:day === theDay && month === theMonth && year === theYear
            }
        },
        onchooseDay(date){
            this.$emit('changeD',date)
            this.showDate = this.yearMonthDay(date)
        }
    },
    computed:{
        chooseDate(){
            const {year,month,day} = this.yearMonthDay(this.date);
            return `${year}-${month+1}-${day}`
        },
        days(){
            const arr = [];
            const {year,month} = this.showDate;
            const firstDay = new Date(year,month,1);
            const week = firstDay.getDay();
            for(let i=0;i<42;i++){
                arr.push(new Date(+firstDay + (i-week)*24*60*60*1000))
            }
            return arr;
        }
       
        
    }
}

</script>
<style scoped>
.pick-in{
    display:inline-block;
}
.pick-input{
    width:300px;
    height:25px;
    padding:16px;
    border:2px solid #e4e4e4;
    border-radius: 6px;
    position: relative;
   
}
.pick-input span{
    font-size: 24px;
    margin-right: 6px;
    color:#cfcfcf;
}
.pick-input input{
    border:none;
    font-size: 18px;
    line-height: 28px;
    vertical-align:top;
    background: white;
    outline: none;
}

.pick-area{
    width:500px;
    padding:20px 15px;
    border:2px solid #e4e4e4;
    border-radius: 6px;
    box-shadow: 0px 4px 10px #dddddd;
    position: absolute;
    top:70px;
    left:0px;
}
.pick-area .pick-triangle{
    width:10px;
    height:10px;
    border-left: 2px solid #e4e4e4;
    border-top: 2px solid #e4e4e4;
    background: white;
    transform: rotate(45deg);
    position: absolute;
    left:74px;
    top:-7px;
}
.pick-content{}
.pick-content .pick-head{
    /* border-bottom: 2px solid #e4e4e4; */
    text-align: center;
}
.pick-content .pick-head span{
    font-size:20px;
    width:50px;
    display: inline-block;
    line-height: 30px;
    cursor: pointer;
}
.pick-content .pick-head .show-day{
    width:250px;
    color: #666666;
    cursor:auto ;
}
.pick-content .pick-body{
    padding:10px 0;
}
.pick-content .pick-body .pick-week{
    text-align: center;
    line-height: 30px;
    padding:10px 0;
    border-bottom: 2px solid #e4e4e4;

}
.pick-body .pick-week span{
    font-size: 20px;
    color:#666666;
   width:70px;
   display: inline-block;
}
.pick-body .pick-days{
    text-align: center;
}
.pick-body .pick-days span{
    width:40px;
    height:40px;
    margin:10px 15px;
    font-size: 20px;
    display: inline-block;
    line-height: 40px;
    color:#666666;
    cursor: pointer;
}
.pick-body .pick-days span:hover{
    color:#4085d4;
}
.pick-body .pick-days span.grey{
    color:#cfcfcf;
}
.pick-body .pick-days span.theDay{
    color:#4085d4;
    
}
.pick-body .pick-days span.choose{
    background: #4085d4;
    border-radius: 50%;
    color:white;
}

</style>