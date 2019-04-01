import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Meeting} from '../models/meeting';

@Injectable({
  providedIn: 'root'
})
export class DoodleApiService {
  baseURL = 'http://localhsot:4200';

  constructor(private http: HttpClient) {}

  store(payload: {user: User, meeting: Meeting, surveyType: number, dates?: string[], locations?: string[]}) {
    return this.http.post('/api/doodle', payload, {headers: {'Content-Type': 'application/json'}});
  }
}
