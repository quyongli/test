<template>
<div>
    <div>
        <input type = 'text' ref = 'input1' />
        <button @click="add" >add 加法 </button>
        <p ref = 'p1'> 添加ref </p>
        <p ref = 'p2'> 添加ref 2 </p>
        <p> {{ arr | big }} </p>
        <input type = 'text' v-model="inputValue" /> {{ inputValue | firstLetter }}
        </br>
        <input type = 'text' v-model="arr" /> {{ arr | toMoney }}
        </br>
        <input type = 'text' v-model="num" /> {{ num | addWan }}
        </br>
        <input type = 'text' v-model="num1" /> {{ num1 | addRule }}
        <!-- <input type = 'text' v-model = { this.input2 } />  -->
<!-- <p> { this.$options.filters('bigLetter') (this.input2) } </p> -->


    </div>
    <header>
        <slot name = 'header'></slot>
    </header>
    <main>
        <slot name = 'main'></slot>
    </main>
    <footer>
        <slot name = 'foot'></slot>
    </footer>
    <div>
        <slot></slot>
    </div>


</div>
</template>
<script>
export default {
    data(){
        return {
            arr:[1,2,3,4,5],
            inputValue:'',
            num:0,
            num1:0,
        }
    },
    filters:{
        addRule(val){
            if(!val){return}
            if(val > 1000 && val < 10000){
                return (val / 1000).toFixed(2) + '千'
            }else if(val >=10000){
                return (val / 10000).toFixed(1) + '万'
            }
            return val;
        },
        addWan(val){
            if(!val){return}
            if(val > 10000){
                return (val / 1000).toFixed(1) + '万';
            }
            return val
        },
       big(value){
           let i= value.length,arr = [];
          for(i;i>0;i--){
              value[i] > 2 ? arr.push(value[i]) : ''
          }
          return arr;
       },
       firstLetter(val){
           if(!val){return}
           return val.charAt(0).toUpperCase() + val.slice(1);
       },
       toMoney(val){
           if(!val){return}
           return val.toLocaleString();
       },
    },
    methods:{
        add(){
            console.log(this.$refs.p1.innerHTML )
            this.$refs.input1.value = '22';
            this.$refs.p1.innerHTML = '获取元素'
        },
    }
}
</script>