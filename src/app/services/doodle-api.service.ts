import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Meeting} from '../models/meeting';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoodleApiService {

  constructor(private http: HttpClient) {
  }

  store(payload: { user: User, meeting: Meeting, surveyType: number, dates?: string[], locations?: string[] }) {
    return this.http.post('/api/doodle', payload, {headers: {'Content-Type': 'application/json'}});
  }

  getUserInfo(email: string): Observable<User> {
    return this.http.get<User>(`/api/users/${email}`);
  }

  getMeeting(id: string): Observable<Meeting> {
    return this.http.get<Meeting>('/api/meetings/' + id);
  }

  autocomplete(value: string) {
    return this.http.post(`/api/users/${value}`, null);
  }

  sendInvitations(meeting: Meeting, payload: any[]): Observable<Meeting> {
    return this.http.post<Meeting>(
      `/api/meetings/${meeting.id}/invitations`,
      payload,
      {headers: {'Content-Type': 'application/json'}}
      );
  }
}
