import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFrenchCityComponent } from './search-french-city.component';

describe('SearchFrenchCityComponent', () => {
  let component: SearchFrenchCityComponent;
  let fixture: ComponentFixture<SearchFrenchCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFrenchCityComponent]
    });
    fixture = TestBed.createComponent(SearchFrenchCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
