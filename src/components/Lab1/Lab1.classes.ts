interface IMegabyte {
   convertToMb: () => number;
}

//========

export class Kilobyte {
   private kb: number;

   constructor(kilobytes: number) {
      this.kb = kilobytes;
   }

   getKbValue(): number {
      return this.kb;
   }
}

export class KbToMbAdapter implements IMegabyte {
   private kbStorage: Kilobyte;

   constructor(kbStorage: Kilobyte) {
      this.kbStorage = kbStorage;
   }

   convertToMb(): number {
      const kb = this.kbStorage.getKbValue();
      return Number((kb / 1024).toFixed(2));
   }
}
