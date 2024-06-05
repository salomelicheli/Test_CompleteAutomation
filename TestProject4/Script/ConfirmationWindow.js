class ConfirmationWindow{
  
    constructor() {
      this.button = Aliases.Orders.dlgConfirmation.btnYes;
    }
    
    clickingYesBtn() {
      this.button.Click();
    }
}

const confirmationWindow = new ConfirmationWindow();
module.exports = confirmationWindow;