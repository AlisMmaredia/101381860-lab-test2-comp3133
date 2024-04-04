import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to fetch all SpaceX launches
  getLaunches() : Observable<Mission[]>{
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  // Example: Method to fetch launches by year
  getLaunchesByYear(year: string) : Observable<Mission[]>{
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches?launch_year=${year}');
  }

  getFightByFightNumber(number: string) {
    return this.http.get('https://api.spacexdata.com/v3/launches/' +number);
  }
}