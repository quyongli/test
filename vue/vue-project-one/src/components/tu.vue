

<script>
import threeDemo from './three.vue';
import fourDemo from './four.vue';
import fiveDemo from './five.vue';

export default {
    data(){
        return {
            msg:'value_zhi',
            flag:true,
            inputValue:'v-bind 直接写差值',
            arr:[1,2,3,4],
            input2:'',
        }
    },
    render(){
        return (
            <div id='box'>
                <h3> bioti </h3>
                <p> { this.msg } </p>
                <p>  { true ? 'yes' : 'no' } </p>
<div domPropsTextContent = '<p>i am p ,use domPropsTextContent="tag" </p>'></div>
<div domPropsInnerHTML = '<p>html use  domPropsInnerHTML </p>'></div>
<p v-show = {this.flag}> 差值，演示v-show </p>
{true ? '<h3> 模拟v-if</h3>' : ''}
<h3> { true ? '模拟v-if: && || 三目表达式' : '' } </h3>
{ '差值里面，可以直接写字符串' }
{ '利用map 进行for循环' }
{[1,2,3,4].map((item)=>{
   return <li key={item}> { item } </li>
})}

{ [11,12,13].map(item => (<li key = {item}> {item} </li> )) }
<button on-click = {this.oneClick}> 点击 on-click 事件</button>       
<button onClick = {this.one_1Click } > 点击事件onClick </button>
<p style = 'color:pink' > 点击这里，不执行；  <span activeOnClick = { this.one_2click}>点击此处执行，模拟onClick.active  </span> </p>
<three-demo nativeOnClick = {this.one1Click}>模拟v-on:click.active </three-demo>
<input value = {this.inputValue} />
<p style = 'color:pink'> 写style </p>
<p style = { {color:'pink',fontSize:'22px'} } >写style，多个样式 要用差值 </p>
<p class = { {a:true,b:false} }> 添加class </p>
<input v-model = {this.inputValue} />
<p> { this.inputValue } </p>
<four-demo>
    <div slot = 'header'>
        这是header 的内容
    </div>
    <p slot = 'main'>
        这是main的内容
    </p>
    <div slot = 'foot'>
    这是foot内容
    </div>
    zheg

</four-demo>
<div ref = 'oneRef'> 元素添加ref </div>
<div ref = 'tuRef'> 元素添加ref </div>

<div> { this.arr } </div>
<five-demo>
    第五个组件默认插槽
<p slot = 'h1'> di five 具名组件 </p>
<p slot = 'h2'> di five 具名组件 </p>
<p slot = 'h3'> di five 具名组件 </p>
</five-demo>



            </div>
        )
    },
    filters:{
        bigLetter(val){
            if(!val){return}
            return val.charAt(0).toUpperCase() + val.slice(1)
        },
        big(num){
            return num > 3;
        }
    },
    methods:{

        oneClick(e){
            e.target.style.color = 'red'
        },
        one_1Click(e){
            e.target.style.backgroundColor = 'green'
        },
        one_2click(e){
            console.log('ssss',e.target)
            e.target.style.color = 'pink'
        },
        one1Click(e){
            e.target.style.color = 'pink'
        },
    },
    components:{
        threeDemo,
        fourDemo,
        fiveDemo,
    }
}
</script>
<style scoped>
#box{
    margin-bottom: 100px;
}
.a{
    font-size: 12px;
}
.b{
    color:red;
}
</style>