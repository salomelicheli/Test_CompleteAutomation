  
  function concatNumberDigits(num1, num2, num3) {
      
     if (!isThreeDigitInteger(num1) || !isThreeDigitInteger(num2) || !isThreeDigitInteger(num3)) {
        Log.Error("all numbers have to be three-digit integers between 100 and 999")
        return;
     }
     const productOfFirstNumber = Array.from(aqConvert.IntToStr(num1), Number).reduce((a,b) => a*b);
     const productOfSecondNumber = Array.from(aqConvert.IntToStr(num2), Number).reduce((a,b) => a*b);
     const productOfThirdNumber = Array.from(aqConvert.IntToStr(num3), Number).reduce((a,b) => a*b);
       
     const concatenatedDigits = aqString.Concat(aqString.Concat(productOfFirstNumber,productOfSecondNumber),productOfThirdNumber);
     return aqConvert.StrToInt(concatenatedDigits);
  }
   
  
  function isPalindrome(value){
    const convertedValue = aqConvert.VarToStr(value).toLowerCase();
    for(var i = convertedValue.length; i > 0; i--){
      if(convertedValue[i - 1] !== convertedValue[convertedValue.length-i]){
        return false;
        break;
      }
    }
    return true;
  }
    
    
  function returnMoqcevaDaQoronikoni(todaysYear){
    const metormetemoqceva = 780;
    const moqceva = 12;
    const cikli = 532;
    let iterations = 0;
    for(var i=todaysYear; i >= metormetemoqceva; i -= cikli ){
      iterations++;
    }
    const moqcevaDges = moqceva + iterations;
    const qoronikoni = cikli-((metormetemoqceva +iterations*cikli) - todaysYear);
      
    return [moqcevaDges, qoronikoni];
  }
  
  function isThreeDigitInteger(num) {
      return Number.isInteger(num) && num >= 100 && num <= 999;
  }
  
  
  
  module.exports = returnMoqcevaDaQoronikoni;
  module.exports.concatNumberDigits = concatNumberDigits;
  module.exports.isPalindrome = isPalindrome;