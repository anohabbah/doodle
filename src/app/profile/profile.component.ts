import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {DoodleApiService} from '../services/doodle-api.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;

  items: MenuItem[] = [
    { label: 'Meetings Feed' }
  ];
  home: MenuItem = { url: '/', icon: 'pi pi-home' };

  constructor(private router: Router, private route: ActivatedRoute, private service: DoodleApiService) {}

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUserInfo(params.get('email')))
    );
  }
}
