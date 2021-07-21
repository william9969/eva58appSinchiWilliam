import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarelectrodomesticoPage } from './mostrarelectrodomestico.page';

describe('MostrarelectrodomesticoPage', () => {
  let component: MostrarelectrodomesticoPage;
  let fixture: ComponentFixture<MostrarelectrodomesticoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarelectrodomesticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarelectrodomesticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
