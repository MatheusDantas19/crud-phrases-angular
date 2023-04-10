import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhraseComponent } from './delete-phrase.component';

describe('DeletePhraseComponent', () => {
  let component: DeletePhraseComponent;
  let fixture: ComponentFixture<DeletePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePhraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
