import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Algorithm from './algorithm.interface';


@Injectable({providedIn: 'root'})
export class AlgorithmService {

  static apiUrl = environment.apiUrl + '/algorithm'
  static options = environment.options

  constructor(private http: HttpClient) { }

  getAlgorithmOfTheDay():Observable<Algorithm[]> {
    return this.http.get<Algorithm[]>(AlgorithmService.apiUrl, AlgorithmService.options)
  }
  
}
