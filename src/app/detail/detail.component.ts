import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DoodleApiService} from '../services/doodle-api.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Meeting} from '../models/meeting';
import {Survey} from '../models/survey';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  meeting$: Observable<Meeting>;
  items: MenuItem[] = [
    {label: 'Meeting Details'}
  ];
  home: MenuItem = {url: '/', icon: 'pi pi-home'};

  constructor(private router: Router, private route: ActivatedRoute, private service: DoodleApiService) {}

  ngOnInit() {
    this.meeting$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMeeting(params.get('id')))
    );
  }

  setTitle(survey: Survey) {
    return survey.dates && survey.addresses
      ? 'Dates & Locations Survey'
      : (
        survey.dates ? 'Dates Survey' : (survey.addresses ? 'Addresses Survey' : 'Meals Survey')
      );
  }

  setValue(survey: Survey, value: { voters: any[] }, base: string): number {
    const votesCount = survey[base].reduce((acc, item) => acc + item.voters.length, 0);

    if (!votesCount) { return 0; }

    return value.voters.length * 100 / votesCount;
  }

  setValueBaseOnAddresses(survey: Survey, address: { voters: any[] }): number {
    return this.setValue(survey, address, 'addresses');
  }

  setValueBaseOnDates(survey: Survey, date: { voters: any[] }): number {
    return this.setValue(survey, date, 'dates');
  }

  setValueBaseOnMeals(survey: Survey, meal: { voters: any[] }): number {
    return this.setValue(survey, meal, 'dietaries');
  }
}
