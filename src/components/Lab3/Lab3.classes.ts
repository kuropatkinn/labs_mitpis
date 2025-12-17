interface IHongKongWaffle {
   getCoast: () => number;
   getDesc: () => string;
}

export class HongKongWaffleSimple implements IHongKongWaffle {
   getCoast() {
      return 350;
   }

   getDesc() {
      return "Гонконгская вафля с мороженным";
   }
}

export class HongKongWaffleWithChocolate implements IHongKongWaffle {
   private hongKongWaffleSimple: IHongKongWaffle;

   constructor(waffleInstance: IHongKongWaffle) {
      this.hongKongWaffleSimple = waffleInstance;
   }

   getCoast() {
      return this.hongKongWaffleSimple.getCoast() + 100;
   }

   getDesc() {
      return this.hongKongWaffleSimple.getDesc() + ", шоколадом";
   }
}

export class HongKongWaffleWithFruits implements IHongKongWaffle {
   private hongKongWaffleSimple: IHongKongWaffle;

   constructor(waffleInstance: IHongKongWaffle) {
      this.hongKongWaffleSimple = waffleInstance;
   }

   getCoast() {
      return this.hongKongWaffleSimple.getCoast() + 150;
   }

   getDesc() {
      return this.hongKongWaffleSimple.getDesc() + ", фруктами";
   }
}

export class HongKongWaffleWithMix implements IHongKongWaffle {
   private hongKongWaffleSimple: IHongKongWaffle;

   constructor(waffleInstance: IHongKongWaffle) {
      this.hongKongWaffleSimple = waffleInstance;
   }

   getCoast() {
      return this.hongKongWaffleSimple.getCoast();
   }

   getDesc() {
      return this.hongKongWaffleSimple.getDesc();
   }
}
