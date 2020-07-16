
  const head = new Vue({
    el:'.headNav',
    data:{
        inputVal:'有猫还要啥男朋友',
        navList:[],
        navClass:'active',
        imgIcon:'>'
    },
    methods:{
     changeNav(){
        
        if(this.navClass == 'active'){
            this.navClass = '';
            this.imgIcon = '<'
        }else{
            this.navClass = 'active';
            this.imgIcon = '>'
        }
     }
    }
    
})

head.$http.get(
    'https://developer.duyiedu.com/vue/bz/nav'
).then(res =>{
   return res.body.data
}).then(res =>{
    head.navList = res;
})

// banner 
const banner = new Vue({
    el:'.banner',
    data:{
        bannerImg:[]
    }
})

banner.$http.get(
    'https://developer.duyiedu.com/vue/bz/banner'
).then(res =>{
    return res.body.data
}).then(res =>{
    banner.bannerImg = res;
})

// content 
const content = new Vue({
    el:'.content',
    data:{
        start:0,
        offset:20,
        imgList:[]
    },
    methods:{
        addImg(){
            this.$http.get(
                'https://developer.duyiedu.com/vue/bz/video',
                {
                    params:{
                        start:this.start,
                        offset:this.offset
                    }
                }
            ).then(res =>{
                return res.body.data
            }).then(res =>{
               this.imgList = res;
            })
            
        },
        
    }
})
content.addImg()












