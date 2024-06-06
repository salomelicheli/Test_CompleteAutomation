class OrdersFormWindow{
  
    constructor(){
      this.orders = Aliases.Orders.OrderForm.Group;
      this.submitbutton = Aliases.Orders.OrderForm.ButtonOK;
      this.state = this.orders.State_;
      this.street = this.orders.Street;
      this.zip = this.orders.Zip;
      this.city = this.orders.City;
     }
     
    setCity(city){
      this.city.Keys(city)
    }
    
    setState(state) {
      this.state.Keys(state);
    }

    setStreet(street) {
      this.street.Keys(street);
    }

    setZip(zip){
      this.zip.Keys(zip);
    }
    
    clickSubmitButton() {
      Aliases.Orders.OrderForm.ButtonOK.Click();
    }
    
    copyStateValue() {
      this.state.Keys("^a^c");
    }

}

module.exports = OrdersFormWindow;