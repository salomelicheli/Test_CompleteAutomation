const OrderAppSteps = require("OrderAppSteps");

function keywordTesing(){
  OrderAppSteps.openOrderApp();
  KeywordTests.FirstOrder.Run("ScreenSaver", "state", "Gobronidze str.");
  KeywordTests.SecondOrder.Run("Salome", "FamilyAlbum");
  KeywordTests.ThirdOrder.Run("02/07/2023", "1238914293");
  OrderAppSteps.closeOrderApp();
}