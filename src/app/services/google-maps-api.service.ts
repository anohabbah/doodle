import {Injectable, NgZone} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/*tslint:disable:no-string-literal*/
@Injectable({
  providedIn: 'root'
})
export class GoogleMapsApiService {
  api: ReplaySubject<any>;

  constructor(private ngZone: NgZone) {
    this.api = new ReplaySubject(1);
  }

  setupAutocomplete(elementId: string) {
        this.createAutocomplete(elementId);
  }

  private createAutocomplete(elementId: string) {
    window['initAutocomplete'] = () => {
      const autocomplete = new window['google'].maps.places.Autocomplete(
        document.getElementById(elementId),
        {types: ['geocode']}
      );
      autocomplete.setFields('address_components');
    };
  }

  loadGoogleMapsAPI() {
    const doc = window.document;
    const script = doc.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD6gD_lvtxqH8mwaziWz-AB20BIblqQT1w&libraries=places&callback=initAutocomplete';
    script.async = true;
    script.defer = true;
    doc.body.appendChild(script);
  }
}
