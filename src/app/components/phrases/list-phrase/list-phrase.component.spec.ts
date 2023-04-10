import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhraseComponent } from './list-phrase.component';

describe('ListPhraseComponent', () => {
  let component: ListPhraseComponent;
  let fixture: ComponentFixture<ListPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
