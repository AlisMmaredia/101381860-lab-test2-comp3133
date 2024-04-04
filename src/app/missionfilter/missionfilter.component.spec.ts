import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFilterComponent } from './missionfilter.component';

describe('MissionFilterComponent', () => {
  let component: MissionFilterComponent;
  let fixture: ComponentFixture<MissionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});