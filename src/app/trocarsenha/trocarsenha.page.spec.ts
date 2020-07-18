import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrocarsenhaPage } from './trocarsenha.page';

describe('TrocarsenhaPage', () => {
  let component: TrocarsenhaPage;
  let fixture: ComponentFixture<TrocarsenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocarsenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrocarsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
