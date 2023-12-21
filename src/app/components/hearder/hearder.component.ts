import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent {
  constructor(private appComponent: AppComponent) {

  }
  goToHome(){
    this.appComponent.goToHome();
  }
}
