
var assert = require('assert');

var frame = require('../app/converter.js');


describe('test converter.js /',function(){
   
        it('has adder function',function(){
          
          assert(frame.adder)
        
        })
        
        it('adder function returns a+b',function(){
          
          assert(frame.adder(1,2)===3)
        
        })
        
        it('adder function works with negatives',function(){
          
          assert(frame.adder(-1,2)===1)
        
        })
        
        
})