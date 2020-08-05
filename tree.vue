<template>
    <ul>
        <li v-for = '(list,index) in data' 
            :key = 'index'
        >
            <i v-if = 'list[defaultData.children]' :class = "{'up':!flag[index], 'down': flag[index]}" ></i>
            <span @click = 'changeFlag(index)'> {{ list[defaultData.label] }} </span>
           <keep-alive>
                <demo-tree v-if = 'list[defaultData.children] && flag[index]' :data = 'list[defaultData.children]' />
            </keep-alive>
        </li> 
    </ul>
</template>
<script>
export default {
    name:'demo-tree',
    props:{
        data:{
            type:Array,
            required:true
        },
        defaultData:{
            type:Object,
            default:()=>({
                label:'text',
                children:'son'
            })
        }
    },
    data(){
        return {
            flag:[]
        }
    },
    methods:{
        changeFlag(index){
            const flag = !this.flag[index];
            this.$set(this.flag,index,flag)
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;
}
li{
    margin-top: 10px;
}
 li i{
    width:0;
    height:0;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    display: inline-block;
}
.up{
    border-bottom: 16px solid #cccccc;
}
.down{
    border-top: 16px solid #cccccc;
}
span{
    cursor: pointer;
}
</style>