import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {FormulaireComponent} from "./components/formulaire/formulaire.component";
import { HearderComponent } from './components/hearder/hearder.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './shared/services/language.service';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, FormulaireComponent,HearderComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({ providedIn: 'root'})
export class AppComponent {
  title = 'formulaire';

  constructor( private router : Router) {
  }

  goToHome() {
    this.router.navigate(['/']);
    alert("goToHome");
  }
}
