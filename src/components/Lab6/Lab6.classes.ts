interface IScooter {
   start: () => string;
}

export class Scooter implements IScooter {
   start() {
      return "Начать кататься!";
   }
}

export class SecurityProxyScooter {
   private scooter: Scooter;

   constructor(scooterInstance: Scooter) {
      this.scooter = scooterInstance;
   }

   start(sum: number) {
      if (sum === 100) {
         return this.scooter.start();
      } else {
         if (sum > 100) throw new Error("Превышение суммы проката!");
         else if (sum < 100) throw new Error("Недостаточно средств!");
         else throw new Error("Ошибка при аренде самоката!");
      }
   }
}
