import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarelectrodomesticoPage } from './listarelectrodomestico.page';

describe('ListarelectrodomesticoPage', () => {
  let component: ListarelectrodomesticoPage;
  let fixture: ComponentFixture<ListarelectrodomesticoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarelectrodomesticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarelectrodomesticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
