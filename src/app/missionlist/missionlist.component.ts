import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpacexService } from '../network/spacex.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  @Input() missionList: Mission[]=[];

  @Output() selectMission = new EventEmitter<any>();

  constructor(private spacexAPI: SpacexService) { }

  ngOnInit(): void {
    // this.getMissionList();
  }

  getMissionList() {
    this.spacexAPI.getLaunches().subscribe(res => {
      this.missionList = res;
    })
  }

  onSelectMission(mission: any): void {
    this.selectMission.emit(mission);
  }
}