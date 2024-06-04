const OrderFormTestCases = require("OrderFormTestCases");


function TestRunner(){
  const OrderFormTests = new OrderFormTestCases();
  OrderFormTests.validatingCustomerNameField();
  OrderFormTests.validatingMastercardCheckbox();
  OrderFormTests.validatingThatPricePerUnitDoesntChange();
  OrderFormTests.validatingUpdatedOrder();
  OrderFormTests.validatingDeletedOrder();
  OrderFormTests.getOrderDataFromServices();
  OrderFormTests.addOrderWithServiceData();
}