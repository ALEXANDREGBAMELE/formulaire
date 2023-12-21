import { Component} from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HearderComponent } from '../../../components/hearder/hearder.component';
import { GatewayOperatorFormComponent } from '../gateway-operator-form/gateway-operator-form.component';
import { FormsModule } from '@angular/forms';
import { GatewayOperatorService } from '../../../shared/services/gatewayOperator.service';
import { TraiteurPaiementComponent } from '../traiteur-paiement/traiteur-paiement.component';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    FooterComponent, HearderComponent, GatewayOperatorFormComponent, FormsModule, TraiteurPaiementComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  operator: string = '';
  constructor(private operatorService : GatewayOperatorService) { }

  isLoaded: boolean = false;
  isClicked!: boolean;

  bottomData:any = [
    {
      id: 1,
      name: "Payer",
      methode: "",
      status: false
    },
    {
      id: 2,
      name: "Annuler",
      methode: "",
      status: false
    }
    ,
    {
      id: 3,
      name: "Suivant",
      methode: "", 
      status: false
    }
  ]

  showOperator(operatorName: string) {
    return this.operator = operatorName;
  }
  
  suivant(){
    return this.bottomData[2].status;
  }
  getImagePath(operatorName: string){
         const imageUrl =  this.operatorService.getImagePath(operatorName);
         return imageUrl;
          
  }

  //router
  goToTraiteurPage(){
    this.operatorService.goToTraiteurPage();
  }
  ngOnInit(): void {
  }
}
