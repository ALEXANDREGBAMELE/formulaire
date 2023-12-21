import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GatewayOperatorService {
  operatorData: any = [
    {
      "id": 1,
      "name": "ORANGE",
      "image": "../../assets/img/logo-orange.png",
      "code": "*144#"
    },
    {
      "id": 2,
      "name": "MTN",
      "image": "../../assets/img/logo-momo.png",
      "code": "*155#"
    },
    {
      "id": 3,
      "name": "MOOV",
      "image": "../../assets/img/logo-moov.png",
      "code": "*155#"
    },
    {
      "id": 4,
      "name": "WAVE",
      "image": "../../assets/img/logo-wave.png",
      "code": "*155#"
    },
    {
      "id": 5,
      "name": "VISA",
      "image": "../../assets/img/logo-visa.png",
      "code": "*155#"
    },
    {
      "id": 6,
      "name": "MASTERCARD",
      "image": "../../assets/img/logo-mastercard.png",
      "code": "*155#"
    }
  ];

  getImagePath(operatorName: string): string | null {
    const operator = this.operatorData.find((op: any) => op.name === operatorName);
    if (operator) {
      return operator.image;
    } else {
      return null;
    }
  }

  //Router methodes
  constructor(private route: Router) { }

  goToTraiteurPage() {
    this.route.navigate(['/traitement']);
  }

  goToAccueilPage() {
    this.route.navigate(['/']);
  }
}
