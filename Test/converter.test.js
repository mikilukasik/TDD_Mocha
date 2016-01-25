
var assert = require('assert');

var converter = require('../app/converter.js');


console.log('[{a:1, b:2}, {a:1, c:3}, {a:1, b:4, d:5}] ===> ebbol ezt csinalj ==> [ [a,b,c,d], [1,2],[1, null, 3], [1, 4, null, 5]]')



var compressTester=function(input,expected){
    
    
    it('compress function gets '+JSON.stringify(input)+' returns '+JSON.stringify(expected),function(){
          
      
        assert.deepStrictEqual(converter.compress(input),expected)
    
    })

    
}

describe('test converter.js /',function(){
   
        it('has compress function',function(){
          
          assert(converter.compress)
        
        })
        
        compressTester([],[[]])
        
        compressTester([{a:1, b:2}],[['a','b'],[1,2]])
          
        compressTester([{a:1, b:2}, {a:1, c:3}, {a:1, b:4, d:5}],[ ['a','b','c','d'], [1,2],[1, null, 3], [1, 4, null, 5]])     
        
})