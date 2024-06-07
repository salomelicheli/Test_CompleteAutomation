class LandingWindow{
  
  constructor(){
    this.main = Aliases.Orders.MainForm;
  }
  
  clickingAddOrder(){
     this.main.MainMenu.Click("Orders|New order...");
  }
  
}

module.exports = LandingWindow;