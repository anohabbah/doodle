import {Component} from '@angular/core';
import {User} from './models/user';
import {Meeting} from './models/meeting';
import {SelectItem} from 'primeng/api';
import {TomtomApiService} from './services/tomtom-api.service';
import {Address} from './models/Address';
import {DoodleApiService} from './services/doodle-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: User = {lastName: '', firstName: '', email: ''};
  meeting: Meeting = {title: '', summary: ''};
  optionItems: SelectItem[] = [
    {label: 'Date Survey', value: 0, icon: 'fa fa-fw fa-clock-o'},
    {label: 'Location Survey', value: 1, icon: 'fa fa-fw fa-map-marker'},
    {label: 'Date & Location Survey', value: 2, icon: 'fa fa-fw fa-calendar'}
  ];
  surveyType = 0;
  dates: string[];
  locations: string[];
  suggestions: string[];

  constructor(private mapsService: TomtomApiService, private doodleApi: DoodleApiService) {
  }

  search(event) {
    this.performSearch(event);
  }

  private performSearch(event) {
    this.mapsService.search(event.query)
      .subscribe((res: Address[]) => {
        this.suggestions = [];
        res.forEach((address: Address) => {
          this.suggestions.push(`${address.freeformAddress}, ${address.country}`);
        });
      });
  }

  onSubmit() {
    const payload = {
      user: this.user,
      meeting: this.meeting,
      surveyType: this.surveyType,
      dates: this.dates,
      locations: this.locations
    };
    console.log(payload);

    this.doodleApi.store(payload)
      .subscribe(
        res => console.log(res)
      );
  }
}
