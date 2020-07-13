import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenhaperdidaPage } from './senhaperdida.page';

describe('SenhaperdidaPage', () => {
  let component: SenhaperdidaPage;
  let fixture: ComponentFixture<SenhaperdidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaperdidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenhaperdidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
