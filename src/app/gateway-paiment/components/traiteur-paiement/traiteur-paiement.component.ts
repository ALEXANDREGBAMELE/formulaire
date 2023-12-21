import { Component } from '@angular/core';
import { GatewayOperatorService } from '../../../shared/services/gatewayOperator.service';

@Component({
  selector: 'app-traiteur-paiement',
  standalone: true,
  imports: [],
  templateUrl: './traiteur-paiement.component.html',
  styleUrl: './traiteur-paiement.component.css'
})
export class TraiteurPaiementComponent {

  constructor(private gatewayOperatorService: GatewayOperatorService) { }
  isAnimationActive: boolean = true;

  toggleAnimation() {
    this.isAnimationActive = !this.isAnimationActive;
  }

  //router
  goToAccueilPage(){
    this.gatewayOperatorService.goToAccueilPage();
  }
}
