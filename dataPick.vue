<template>
    <div class="pick" v-click-outside>
        <div class="pick-input">
            <span class="icon icon-calendar"></span>
            <input type="text"
                :value="initDate"
             >
        </div>
        <div class="pick-area" 
            v-if = 'showPanel'
        >
            <div class="pick-triangle"></div>
            <div class="pick-content">
                <div class="pick-head">
                    <span class="icon icon-pre-year" @click = 'onchangeYear("pre")'></span>
                    <span class="icon icon-pre-day" @click = 'onchangeMonth("pre")'></span>
                    <span class="show-day">
                        {{ showDate.year }}年{{ showDate.month + 1 }}月
                    </span>
                    <span class="icon icon-next-day" @click = 'onchangeMonth("next")'></span>
                    <span class="icon icon-next-year" @click = 'onchangeYear("next")'></span>
                </div>
                <div class="pick-body">
                    <div class="pick-week">
                       <div
                        v-for="week in ['日','一','二','三','四','五','六']"
                        :key= 'week'
                       > {{ week }} </div>
                    </div>
                    <div class="pick-days">
                        <span
                            v-for='day in showDay'
                            :key='day.getTime()'
                            :class="{'other-day':isCur(day).month,
                                    'active':isCur(day).ischooseDay,
                                    'is-today':isCur(day).today
                                    }"
                            @click = 'onChooseDate(day)'
                        > {{ day.getDate() }} </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box"></div>
    </div>
    
</template>
<script>
export default {
    directives:{
        'click-outside':{
            bind(el,binding,vnode){
                const vm = vnode.context;
                document.onclick = function(e){
                    // let one = e.target;
                    const isSon = el.contains(e.target)
                    if(isSon && !vm.showPanel){
                        vm.changePanel(true)
                    }else if(!isSon && vm.showPanel){
                        vm.changePanel(false)
                    }
                }
            }
        }
    },
    props:{
        date:{
            type:Date,
            default: () => new Date(),
        }
    },
    computed:{
        initDate(){
          const {year,month,day} = this.getYearMonthDay(this.date)

           return `${year}-${month+1}-${day}`
        },
        showDay(){
            const {year,month} = this.showDate;
            const firstDay = new Date(year,month,1);
            const week = firstDay.getDay();
            const startDay = firstDay - week * 24 *60*60*1000;

            let arr = [];
            for(let i=0; i<42; i++){
                arr.push(new Date(startDay + i*24*60*60*1000))
            }
            return arr;
        }
    },
    data(){
        return {
           showPanel:false,
           showDate:{
               year:0,
               month:0,
               day:0
           }
        }
    },
    created(){
        this.getShowDate(this.date)
    },
    methods:{
        changePanel(falg){
            this.showPanel = falg;
        },
        getShowDate(date){
            const {year,month,day} = this.getYearMonthDay(date);
            this.showDate = {year,month,day}
        },
        getYearMonthDay(date){
           const year = date.getFullYear();
           const month = date.getMonth() ;
           const day = date.getDate();
           return {
               year,
               month,
               day
           }
        },
        isCur(date){
            const choosDate = new Date(this.initDate)
            const {year,month,day} = this.getYearMonthDay(date);
            const {year:chooseYear,month:chooseMonth,day:chooseDay} = this.getYearMonthDay(choosDate);
            const {year:todayYear,month:todayMonth,day:todayDay} = this.getYearMonthDay(new Date())
            const {year:showYear,month:showMonth} = this.showDate;
            return {
                month: year === showYear && month !== showMonth,
                ischooseDay: year === chooseYear && month === chooseMonth && day === chooseDay,
                today:year === todayYear && month === todayMonth && day === todayDay
            }
        },
        onChooseDate(day){
           this.$emit('choose-date',day);
           this.showPanel = false;
           this.getShowDate(day);
        },
        onchangeMonth(type){
            const moveMonth = type ==='pre' ? -1 : 1 ;
            const {year,month,day} = this.showDate;
            const showDate = new Date(year,month,day)
            showDate.setMonth(month+moveMonth)
            const {year:showYear,month:showMonth} = this.getYearMonthDay(showDate)
            this.showDate.year = showYear;
            this.showDate.month = showMonth;







            // let {year,month} = this.showDate;
            // month += moveMonth;
            
            // if( month < 1 ){
            //     month = 11;
            //     year--;
            // }
            // if(month > 11){
            //     month = 0;
            //     year ++;
            // }
            // this.showDate.month = month;
            // this.showDate.year = year;
        },
        onchangeYear(type){
            const moveYear = type === 'pre' ? -1 : 1 ;
            this.showDate.year += moveYear;
        }
    }
}
</script>
<style scoped>
@import url("./assets/font.css");

.pick{
    width:400px;
    /* border:3px solid firebrick; */
}
.pick-input{}

.pick-input input{
    width:190px;
    height:18px;
    font-size: 18px;
    color: #666666;
    padding:10px 30px;
    border:1px solid #cccccc;
    border-radius: 4px;
}
.pick-input .icon-calendar{
    font-size: 18px;;
}

.pick-area{
    width:400px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
}

.pick-area .pick-triangle{
    width:0;
    height:0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #cccccc;
    margin: auto;
}
.pick-area .pick-content{
    width:100%;
    padding:10px;
    border:1px solid #cccccc;
    box-shadow: 0px 4px 8px #cccccc;
}
.pick-area .pick-content .pick-head{
    /* display: flex; */
   text-align: center;
}
.pick-area .pick-content .pick-head span{
 width:10%;
 display: inline-block;
 cursor: pointer;
 font-size: 18px;
 color: #999999;;
}

.pick-area .pick-content .pick-head .show-day{
    width:45%;
    text-align: center;
}

.pick-area .pick-content .pick-body{
      text-align: center;
}
.pick-area .pick-content .pick-body .pick-week{
    width:100%;
    font-size: 18px;
   border-bottom: 2px solid #ebeef5;
}
.pick-area .pick-content .pick-body .pick-week div{
    width:54px;
    display: inline-block;
}
.pick-area .pick-content .pick-body .pick-days{
   width:100%;
    
}
.pick-area .pick-content .pick-body .pick-days span{
     width:34px;
     margin:0 10px;
     display: inline-block;
}
.pick-area .pick-content .pick-body .pick-days span:hover{
    color:#409eff;
    cursor: pointer;
}
.pick-area .pick-content .pick-body .pick-days span.is-today{
    color:#409eff;
    font-weight: bold;
}
.pick-area .pick-content .pick-body .pick-days span.active{
       color:white;
    
    background:#409eff;
    border-radius: 50%; 
}

.pick-area .pick-content .pick-body .pick-days span.other-day{
    color:#c0c4cc
}
</style>