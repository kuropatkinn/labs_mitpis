interface IVpn {
   connect: () => string;
}

export class Vpn implements IVpn {
   connect() {
      return "Успешное подключение к ВПН!";
   }
}

export class SecurityProxyVpn {
   private vpn: Vpn;

   constructor(vpnInstance: Vpn) {
      this.vpn = vpnInstance;
   }

   connect(otpCode: string) {
      if (otpCode === "000000") {
         return this.vpn.connect();
      } else {
         throw new Error("Неверный пароль ОТП!");
      }
   }
}
