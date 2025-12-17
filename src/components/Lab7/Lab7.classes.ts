interface IProduct {
   name: string;
   salary: number;
   discount?: number;
}

interface IBasket {
   addProduct: (product: IProduct) => void;
   getListProducts: () => IProduct[];
   getCurrentSalaryWithDiscount: (product: IProduct) => number;
   getSum: () => number;
}

export class Product implements IProduct {
   name: string;
   salary: number;
   discount?: number;

   constructor(name: string, salary: number, discount?: number) {
      this.name = name;
      this.salary = salary;
      this.discount = discount;
   }
}

export class Basket implements IBasket {
   private products: IProduct[];

   constructor() {
      this.products = [];
   }

   addProduct(product: IProduct) {
      this.products.push(product);
   }

   getListProducts() {
      return this.products;
   }

   getCurrentSalaryWithDiscount(product: IProduct) {
      if (product?.discount) {
         return product.salary - (product.salary * product.discount) / 100;
      }

      return product.salary;
   }

   getSum() {
      return this.products.reduce((sum, product) => {
         return sum + this.getCurrentSalaryWithDiscount(product);
      }, 0);
   }
}
