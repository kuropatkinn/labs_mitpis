interface ICar {
   moving: () => string;
}

//========

export class Starter {
   start(raceOption: ICar) {
      return `Красный... Желтый... Зеленый! ${raceOption.moving()}`;
   }
}

export class BlueCar implements ICar {
   moving(): string {
      return "Синяя машина тронулась";
   }
}

export class RedCar implements ICar {
   moving(): string {
      return "Красная машина тронулась";
   }
}

export class Camera {
   filming(): string {
      return "Съемка началась!";
   }
}

export class CameraAdapter implements ICar {
   private camera: Camera;

   constructor(cameraInstance: Camera) {
      this.camera = cameraInstance;
   }

   moving(): string {
      return this.camera.filming();
   }
}
