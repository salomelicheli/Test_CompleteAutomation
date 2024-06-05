class Assertions{
  
   assertTrue(condition) {
      if (!condition) {
        Log.Error(`Assert has failed!`);
      }
   }
   
   assertFalse(condition) {
      if (condition) {
        Log.Error(`Assertion passed, but it expected failure`);
      } 
   }
   
   assertEquals(condition, expected){
     if(condition != expected){
       Log.Error(`Assert has failed!`);
     }
   }
  
}

module.exports = Assertions;