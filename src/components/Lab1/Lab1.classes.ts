interface MegabyteInterface {
   convertToMb(): number;
}

export class KilobyteStorage {
   private kb: number;

   constructor(kilobytes: number) {
      this.kb = kilobytes;
   }

   getKbValue(): number {
      return this.kb;
   }
}

export class KbToMbAdapter implements MegabyteInterface {
   private kbStorage: KilobyteStorage;

   constructor(kbStorage: KilobyteStorage) {
      if (!(kbStorage instanceof KilobyteStorage)) {
         throw new Error("Ошибка: ожидается объект типа KilobyteStorage");
      }

      this.kbStorage = kbStorage;
   }

   convertToMb(): number {
      const kb = this.kbStorage.getKbValue();
      return Number((kb / 1024).toFixed(2));
   }
}
