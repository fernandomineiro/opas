import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoguinhoPage } from './joguinho.page';

describe('JoguinhoPage', () => {
  let component: JoguinhoPage;
  let fixture: ComponentFixture<JoguinhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoguinhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoguinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
