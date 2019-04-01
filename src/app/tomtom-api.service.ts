import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from './models/Address';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TomtomApiService {
  baseURL = 'https://api.tomtom.com';
  versionNumber = 2;
  ext = '.json';
  key = 'D9ng9zYXTmRhZzhErIxB762AWMbxWPkt';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<Address[]> {
    const url = `${this.baseURL}/search/${this.versionNumber}/geocode/${query}${this.ext}?key=${this.key}`;

    return this.http.get(url)
      .pipe(
        map((data: { results: any[] }) => {
          const { results }  = data;
          return results.map(item => item.address);
        })
      );
  }
}
