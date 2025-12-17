interface ILogicMethod {
   deliver(): string;
}

interface IOrder {
   placeOrder(): string;
}

//====

export class DeliveryAir implements ILogicMethod {
   deliver() {
      return "Доставка самолетом.";
   }
}

export class DeliveryEarth implements ILogicMethod {
   deliver() {
      return "Доставка грузовиком.";
   }
}

//====

// Абстрактный класс заказа
abstract class OrderBase implements IOrder {
   protected deliveryMethod: ILogicMethod;

   constructor(method: ILogicMethod) {
      this.deliveryMethod = method;
   }

   abstract placeOrder(): string;
}

//====

// Конкретные заказы
export class StandardOrder extends OrderBase {
   placeOrder() {
      return `Стандартный заказ размещён. Способ доставки: ${this.deliveryMethod.deliver()}`;
   }
}

export class ExpressOrder extends OrderBase {
   placeOrder() {
      return `Экспресс-заказ размещён. Способ доставки: ${this.deliveryMethod.deliver()}`;
   }
}
