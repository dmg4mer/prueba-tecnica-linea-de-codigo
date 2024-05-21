import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public async getPlanet(search?: string) {
    return lastValueFrom<any>(
      this.http.get(environment.api + `planets/${search ? '?search=' + search : ''}`)).then(res => res)
  }
  public async getPlanetById(idPlanet: string) {
    return lastValueFrom<any>(
      this.http.get(environment.api + `planets/${idPlanet}`)).then(res => res)
  }

  // public  getPlanets(): Observable<any[]> {
  //   return this.http.get<any[]>('https://api.example.com/planets'); // ajusta la URL según tu API
  // }
}
