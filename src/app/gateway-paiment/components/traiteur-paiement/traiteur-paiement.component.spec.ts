import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiteurPaiementComponent } from './traiteur-paiement.component';

describe('TraiteurPaiementComponent', () => {
  let component: TraiteurPaiementComponent;
  let fixture: ComponentFixture<TraiteurPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraiteurPaiementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraiteurPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
