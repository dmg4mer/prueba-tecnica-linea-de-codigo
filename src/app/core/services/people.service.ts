import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public async getPeople() {
    return lastValueFrom<any>(
      this.http.get(environment.api + `people/`)).then(res => res)
  }
  public async getPeopleById(idPeople : string) {
    return lastValueFrom<any>(
      this.http.get(environment.api + `people/${idPeople}`)).then(res => res)
  }

}
