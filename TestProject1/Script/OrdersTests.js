const AddOrderAction = require('AddingOrderSteps').AddOrderAction;
const OrderAppSteps = require("OrderAppSteps");


function Test(){
 const OrderFormActions = new AddOrderAction();
 OrderAppSteps.openOrderApp();
 aqObject.CheckProperty(Aliases.Orders.MainForm, "VisibleOnScreen", cmpEqual, true);
  OrderFormActions
   .openOrderMenu()
   .addProductName("ScreenSaver")
   .addOrderWithState("state")
   .addOrderWithStreet("Gobronidze str.")
   .clickSubmitButton();
  
  OrderFormActions
   .openOrderMenu()
   .addProductName("FamilyAlbum") 
   .addOrderWithCustomerName("Salome")
   .clickSubmitButton();
  
  OrderFormActions
   .openOrderMenu()
   .addOrderWithDate("02/07/2023")
   .addOrderWithCardNo("1238914293")
   .clickSubmitButton();
   
  OrderAppSteps  
   .closeOrderApp();
   aqObject.CheckProperty(Aliases.Orders.MainForm, "Exists", cmpEqual, false);
}