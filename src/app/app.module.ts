import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormulaireComponent} from "./components/formulaire/formulaire.component";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormulaireComponent,
    CardModule,
    InputTextModule,
  ]
})
export class AppModule { }
