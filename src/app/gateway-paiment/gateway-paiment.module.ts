import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { HearderComponent } from '../components/hearder/hearder.component';
import { AccueilComponent } from './components/accueil/accueil.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,FooterComponent,HearderComponent, AccueilComponent
  ]
})
export class GatewayPaimentModule { }
