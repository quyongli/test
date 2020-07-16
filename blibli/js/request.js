axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz/'

axios.interceptors.response.use(function (res) {
    // console.log(res)
    
    if(res.data.code === 200){
        if(res.config.url == res.config.baseURL + 'video'){
            return {
                count:res.data.count,
                data:res.data.data
            }
        }else{
            return res.data.data;
        }
        
    }
  });