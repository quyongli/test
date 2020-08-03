<template>
   <ul>
        <li
        v-for='(list,index) in data'
        :key = list.label
       >
       <i
        v-if='list.children'
            :class = "{'up':!showList[index],'down':showList[index]}"
       ></i>
       
       <span
        @click = 'changeShow(index)'
       >
           {{ list.label }}
          
       </span>
       <keep-alive>
            <base-tree v-if='showList[index] && list.children' :data = 'list.children'/>
       </keep-alive>
       </li>
   </ul>
</template>
<script>
export default {
    name:'base-tree',
    props:{
        data:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            showList:[]
        }
    },
    methods:{
        changeShow(index){
            const flag = !this.showList[index]
            this.$set(this.showList,index,flag)
console.log(this.showList)
        }
    }
}
</script>
<style scoped>
    ul{
        list-style: none;
    }
    li{
        margin-top: 18px;
    }
    ul li i{
        width:0;
        height:0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        display: inline-block;
        cursor: pointer;
    }
    ul li .up{
        border-bottom: 12px solid #cccccc;
    }
    ul li .down{
         border-top: 12px solid #cccccc;
    }

</style>