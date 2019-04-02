import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {DoodleComponent} from './doodle/doodle.component';

const routes: Routes = [
  {path: 'profile/:email', component: ProfileComponent},
  {path: '', component: DoodleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
