import { Component, Input } from '@angular/core';
import { GatewayOperatorService } from '../../../shared/services/gatewayOperator.service';

@Component({
  selector: 'app-gateway-operator-form',
  standalone: true,
  imports: [],
  templateUrl: './gateway-operator-form.component.html',
  styleUrl: './gateway-operator-form.component.css'
})
export class GatewayOperatorFormComponent {

  @Input() imageUrl!: any;
  @Input() buttonEvent!: any;
  @Input() suivant!: boolean;
  
  @Input() isClicked: boolean = false;
  constructor( private operatorService : GatewayOperatorService) { }

  ngOnInit(): void {
    console.log(this.suivant);
  }
}
