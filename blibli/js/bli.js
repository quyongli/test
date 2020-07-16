const box = new Vue({
    el:'.box',
    data:{
        navList:[],
        inputVal:'搜索信息',
        navHide:true,
        navIndexActive:0,
        bannerIndexActive:0,
        bannerList:[],
        bannerWidth:350,
        bannerMoveLeft:{
            left:0,
            transition:'left .5s'
        },
        contentList:[],
        contentStart:0,
        contentOffset:20,
        flag:false,
        contentCount:0
    },
    methods:{
        navHandleClick(){
            this.navHide = !this.navHide;
        },
        navLiClick(index){
            this.navIndexActive = index;
        },
        autoMove(){
            let timer = setTimeout(()=>{
                if(this.bannerIndexActive === 0){
                    this.bannerMoveLeft.transition = 'left .5s'
                }
                this.bannerIndexActive ++;
                
                
                this.bannerMoveLeft.left = -this.bannerWidth * this.bannerIndexActive + 'px';
                clearTimeout(timer)
            },1000)
        },
        handleTranstionEnd(){
            if(this.bannerIndexActive == this.bannerList.length-1 ){
                this.bannerIndexActive = 0;
                this.bannerMoveLeft.left = 0;
                this.bannerMoveLeft.transition = 'none'
            } 
            this.autoMove();
        },
        boxScroll(e){
           const {scrollHeight,offsetHeight,scrollTop} = e.target;
           const toBottomHeight = scrollHeight - offsetHeight - scrollTop ;
           const contentLength = this.contentListNew.length;
           if(contentLength === this.contentCount){return; }
           if(toBottomHeight < 600 && !this.flag){
                this.flag = true;
                axios.get('https://developer.duyiedu.com/vue/bz/video',{
                    params:{
                        start:this.contentList.length,
                        offset:this.contentOffset
                    }
                }).then((res)=>{
                    if(res.status === 200){
                        this.contentList.push(...res.data.data)
                        this.flag = false;
                    }
                    
                })
           }
        }
    },
    computed:{
        contentListNew(){
          return  this.contentList.map((ele)=>{
                ele.play = ele.play > 10000 ? ele.play/10000 + '万' : ele.play;
                ele.rank = ele.rank > 10000 ? ele.rank / 10000 + '万' : ele.rank;
                return ele;
            })
          
        }
    },
    created(){
        
        axios.get('https://developer.duyiedu.com/vue/bz/nav')
        .then(res=>{
            if(res.status === 200 ){
                this.navList = res.data.data
            }
               
        })

        axios.get('https://developer.duyiedu.com/vue/bz/banner')
        .then(res =>{
            if(res.data.code === 200){
                const one = {...res.data.data[0]};
                one.id = Math.floor(Math.random() * 10000000);
                this.bannerList = [...res.data.data,one]
            }
            // console.log(this.bannerList);
            
        })
        
        axios.get('https://developer.duyiedu.com/vue/bz/video',{
            params:{
                start:this.contentStart,
                offset:this.contentOffset
            }
        }).then((res)=>{
            if(res.status === 200){
                this.contentList = res.data.data;
                this.contentCount = res.data.count
            }
            console.log(this.contentList)
        })
    },
    mounted(){
        this.autoMove()
    }
})








