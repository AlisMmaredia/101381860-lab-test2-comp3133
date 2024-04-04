import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionFilterComponent } from './missionfilter/missionfilter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'filter', component:MissionFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }