import {NgModule} from '@angular/core';
import {CardModule} from 'primeng/card';
import {
  AutoCompleteModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  MessageModule,
  PanelModule,
  ProgressBarModule,
  SelectButtonModule
} from 'primeng/primeng';

@NgModule({
  exports: [
    CardModule,
    PanelModule,
    ButtonModule,
    MessageModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    BreadcrumbModule,
    ProgressBarModule,
    InputSwitchModule,
    SelectButtonModule,
    AutoCompleteModule,
    InputTextareaModule
  ]
})

export class PrimeNGModule {
}
