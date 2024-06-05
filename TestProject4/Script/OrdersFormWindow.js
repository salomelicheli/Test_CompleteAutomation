class OrdersFormWindow{
  
    constructor(){
      this.orders = Aliases.Orders.OrderForm.Group;
      this.submitbutton = Aliases.Orders.OrderForm.ButtonOK;
      this.customer = this.orders.Customer;
      this.cardNo =  this.orders.CardNo;
      this.quantity = this.orders.Quantity;
      this.price = this.orders.Price;
      this.state = this.orders.State_;
      this.street = this.orders.Street;
      this.zip = this.orders.Zip;
      this.city = this.orders.City;
      this.mastercard = this.orders.MasterCard;
     }
     
    setCity(city){
      this.city.SetText(city)
    }
    
    setCustomerName(name) {
      this.customer.SetText(name);
    }

    setCardNo(cardNo) {
      this.cardNo.Keys(cardNo);
    }

    setState(state) {
      this.state.SetText(state);
    }

    setStreet(street) {
      this.street.SetText(street);
    }

    setPrice(price){
      this.price.setText(price);
    }
  
    setQuantity(quantity){
      this.quantity.Keys(quantity);
    }
  
    setZip(zip){
      this.zip.SetText(zip);
    }
    
    setPricePerUnit(price){
      this.price.Keys(price);
    }
    
    clearingNameField(){
      this.customer.Clear();
    }
  
    clickSubmitButton() {
      Aliases.Orders.OrderForm.ButtonOK.Click();
    }
    
    validatingCustomerNameField(){
      aqObject.CheckProperty(this.customer, "ReadOnly", cmpEqual, false);
    }
    
    validatingMasterCardCheckbox(){
      aqObject.CheckProperty(this.customer, "Enabled", cmpEqual, true);
    }
    
    validatingUpdatedNameField(name){
      aqObject.CheckProperty(this.customer, "wText", cmpEqual, name);
    }
    
    validatingPricePerUnit(defaultPricePerUnit){
      aqObject.CheckProperty(this.price, "text", cmpEqual, defaultPricePerUnit);
    }

}

module.exports = OrdersFormWindow;