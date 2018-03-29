import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http';
import { Bien } from './bien';


@Injectable()
export class BienService {
 constructor(private http : HttpClient) { }

 getAllBien() : Observable<any>{
   return this.http.get('../assets/data/listebien.json')
 }
}
