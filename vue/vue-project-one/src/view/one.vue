<template>
    <div>
        <div class="top">
            <div class="topIn">
                <div class="left">渡一教育</div>
                <div class="right">
                    <router-link to='/' tag="span">首页</router-link>
                    <router-link to = '/learn'  tag = 'span'> 学习 </router-link>
                    <router-link to = '/student' tag = 'span'> 学员展示 </router-link>
                    <router-link to = '/about'  tag = 'span'> about关于 </router-link>
                    <router-link to = '/home'  tag = 'span'> 关于社区 </router-link>
                </div>
            </div>
            
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.top{
    width:100%;
    height:80px;
    line-height: 80px;
    background: rgb(36, 94, 219);
    
}
.topIn{
    width:1000px;
    display: flex;
    justify-content: space-between;
    color:white;
    margin:0 auto;
}
.topIn .right span{
    display:inline-block;
    margin-left: 50px;
}
/* .topIn .right span.router-link-exact-active{
    font-weight: bold;
} */
.topIn .right span.exact-active{
    font-weight: bold;
}
.content{
    width: 1000px;
    margin:50px auto 0;
}
</style>
