import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Meeting} from '../models/meeting';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DoodleApiService} from '../services/doodle-api.service';
import {switchMap} from 'rxjs/operators';
import {User} from '../models/user';
import {Survey} from '../models/survey';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  private meeting$: Observable<Meeting>;
  private items: MenuItem[] = [
    {label: 'Survey'}
  ];
  private home: MenuItem = {url: '/', icon: 'pi pi-home'};
  private user$: Observable<User>;
  private votes: { dates: number[], locations: number[], meals: number[] } = {
    dates: [],
    locations: [],
    meals: []
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: DoodleApiService) {
  }

  ngOnInit() {
    this.meeting$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMeeting(params.get('id')))
    );

    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUserInfo(params.get('email')))
    );
  }

  setSubHeader(pause: false) {
    return pause ? 'You plan a break for this meeting' : 'You do not plan a break for this meeting';
  }

  vote(survey: Survey) {
    this.user$.subscribe(
      (user: User) => {
        let payload = {
          email: user.email
        };

        if (survey.dates && survey.addresses) {
          payload = Object.assign({}, payload, {surveyType: 2, dates: this.votes.dates, locations: this.votes.locations});
        } else if (survey.dates) {
          payload = Object.assign({}, payload, {surveyType: 0, dates: this.votes.dates});
        } else if (survey.addresses) {
          payload = Object.assign({}, payload, {surveyType: 1, locations: this.votes.locations});
        } else {
          payload = Object.assign({}, payload, {surveyType: 3, meals: this.votes.meals});
        }

        this.service.vote(survey, payload).subscribe();
      }
    );
  }
}
