class Bike {
   price: number;
   max_speed: string;
   miles: number;

   constructor(price: number, max_speed: string) {
      this.price = price;
      this.max_speed = max_speed;
      this.miles = 0;
   }
   displayInfo = () => {
      console.log(`This bike costs ${this.price}, has a maximum speed of ${this.max_speed}, and has traveled ${this.miles} miles`)
      return this
   }
   ride = () => {
      console.log('Riding')
      this.miles += 10
      return this
   }
   reverse = () => {
      console.log('Reversing')
      this.miles -= 5
      return this
   }
}

let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(300, "40mph");
let bike3 = new Bike(700, "75mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo()