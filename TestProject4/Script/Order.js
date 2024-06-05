class Order{
  
   constructor() {
        this.quantity;
        this.name;
        this.age;
        this.street;
        this.city;
        this.state;
        this.zip;
        this.cardNo;
    }

    getQuantity() {
        return this.quantity;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getStreet() {
        return this.street;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getZip() {
        return this.zip;
    }

    getcardNo() {
        return this.cardNo;
    }

    setQuantity(value) {
        this.quantity = value;
    }

    setName(value) {
        this.name = value;
    }

    setAge(value) {
        this.age = value;
    }

    setStreet(value) {
        this.street = value;
    }

    setCity(value) {
        this.city = value;
    }

    setState(value) {
        this.state = value;
    }

    setZip(value) {
        this.zip = value;
    }

    setCardNo(value) {
        this.cardNo = value;
    }
    
}

module.exports = new Order();