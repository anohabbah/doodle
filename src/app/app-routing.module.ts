import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {DoodleComponent} from './doodle/doodle.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: 'profile/:email', component: ProfileComponent},
  {path: 'meetings/:id', component: DetailComponent},
  {path: '', component: DoodleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
