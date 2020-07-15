import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrusoPage } from './intruso.page';

describe('IntrusoPage', () => {
  let component: IntrusoPage;
  let fixture: ComponentFixture<IntrusoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrusoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrusoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
