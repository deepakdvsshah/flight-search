import { async, TestBed } from '@angular/core/testing';
import { SharedSearchModule } from './shared-search.module';

describe('SharedSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSearchModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedSearchModule).toBeDefined();
  });
});
