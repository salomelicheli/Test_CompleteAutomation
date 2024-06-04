class LandingWindow{
  
  constructor(){
    this.main = Aliases.Orders.MainForm;
    this.ordersView = Aliases.Orders.wndWindowsForms10Window8app0141b42ar8ad1.Item;
  }
  
  clickingAddOrder(){
     this.main.MainMenu.Click("Orders|New order...");
  }
  
  clickingDeleteOrder(){
     this.main.MainMenu.Click("Orders|Delete order");
  }

  clickOnEditOrder(){
    this.main.MainMenu.Click("Orders|Edit order...");
  }
  
  clickingOnOrder(){
    this.ordersView.DblClickItem(0);
  }
  
  validatingDeletedOrder(value){
    aqObject.CheckProperty(this.ordersView, "wItemCount", cmpEqual, value);
  }
  
}

module.exports = new LandingWindow();