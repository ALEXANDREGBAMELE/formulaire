import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayOperatorFormComponent } from './gateway-operator-form.component';

describe('GatewayOperatorFormComponent', () => {
  let component: GatewayOperatorFormComponent;
  let fixture: ComponentFixture<GatewayOperatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GatewayOperatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GatewayOperatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
