import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    CardModule,
    FormsModule
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  value: string | undefined;


}
