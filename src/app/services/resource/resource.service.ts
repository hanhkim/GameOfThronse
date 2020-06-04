import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    private httpService: HttpService
  ) { }

  loadListHouses() {
    return this.httpService.get('houses');
  }
}
 