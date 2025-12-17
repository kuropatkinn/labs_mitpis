interface IChristmasTree {
   hang(countBranch: number): string;
}

class Decorations implements IChristmasTree {
   private readonly size: string;
   private readonly color: string;

   constructor(size: string, color: string) {
      this.size = size;
      this.color = color;
      console.log(`[Flyweight Создан]: Размер '${size}' с цветом '${color}'`);
   }

   hang(countBranch: number) {
      return `Повесили украшение на ${countBranch} ветку на елке!`;
   }
}

export class DecorationsFactory {
   private flyweights: Map<string, IChristmasTree> = new Map();

   getDecoration(size: string, color: string) {
      const key = `${size}-${color}`;

      if (this.flyweights.has(key)) {
         console.log(
            `[Фабрика]: Возвращаем существующий легковес для ключа: ${key}`
         );
         return this.flyweights.get(key)!;
      }

      const newDecoration = new Decorations(size, color);
      this.flyweights.set(key, newDecoration);
      return newDecoration;
   }

   getCacheSize(): number {
      return this.flyweights.size;
   }
}
