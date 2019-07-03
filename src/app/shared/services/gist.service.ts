import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDatabase } from '../models/database.model';
import { IFlowElement } from '../models/flow-element.model';

@Injectable({
  providedIn: 'root'
})
export class GistService implements IDatabase {
  readonly url =
    'https://gist.githubusercontent.com/alexdarc/092a156b00ed5d5df16a46c4ddc59594/raw/194f732477e0a51a1c58a2e3e7a04810eb83a698/rr-process.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IFlowElement[]> {
    return this.http.get<IFlowElement[]>(this.url);
  }
}
