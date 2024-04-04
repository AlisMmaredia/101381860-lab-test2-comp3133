import { Component, Input } from '@angular/core';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  @Input() mission: Mission | null = null;
}
