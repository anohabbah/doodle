import {NgModule} from '@angular/core';
import {CardModule} from 'primeng/card';
import {
  AutoCompleteModule, BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  MessageModule,
  PanelModule,
  SelectButtonModule
} from 'primeng/primeng';

@NgModule({
  exports: [
    CardModule,
    PanelModule,
    ButtonModule,
    MessageModule,
    CalendarModule,
    InputTextModule,
    BreadcrumbModule,
    InputSwitchModule,
    SelectButtonModule,
    AutoCompleteModule,
    InputTextareaModule
  ]
})

export class PrimeNGModule {
}
