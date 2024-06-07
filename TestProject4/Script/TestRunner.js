const OrderFormTestCases = require("OrderFormTestCases");
const DateTimeExtensions = require("DateTimeExtensions");
const { concatNumberDigits, isPalindrome } = require("HelperMethods");

function TestRunner(){
  const OrderFormTests = new OrderFormTestCases();
  OrderFormTests.addOrderWithState();
}

function MethodTest(){
  const dateTimeExtensions = new DateTimeExtensions();
  Log.Message(dateTimeExtensions.getQoronikoniDate());
  Log.Message(dateTimeExtensions.sumOfTodaysDate())
  Log.Message(concatNumberDigits(111,231,123));
  Log.Message(isPalindrome("kayak"));
  Log.Message(isPalindrome("repaper"));
  Log.Message(isPalindrome("Noon"));
  Log.Message(isPalindrome("nono"));
}