module.exports={
    
    compress:function(req){
        var result=[]
        var keys=[]
      
        console.log(req)
        
        req.forEach(function(item){
            
            var toPush=[]
            
            for (var i=keys.length-1;i>=0;i--)toPush[i]=null
            
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                       
                        var keyIndex=keys.indexOf(key)
                        
                        if(keyIndex<0){
                            
                            keyIndex=keys.push(key)-1
                        
                        }
                        
                        toPush[keyIndex]=item[key]
                            
                    }
                }
                              
                result.push(toPush)
      
        })
        
        result.unshift(keys)
       
        return result
        
    }
    
}