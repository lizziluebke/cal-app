import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateComponent } from './date/date.component';
import { CalendarModule } from 'ngdatecalendar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { TimesComponent } from './times/times.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { getAppointmentService } from './services/getAppointments.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';






const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'date', component: DateComponent}
  , { path: 'clientInfo', component: ClientInfoComponent }
  , { path: 'times', component: TimesComponent }
  , { path: 'confirmation', component: ConfirmationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomeComponent,
    ClientInfoComponent,
    TimesComponent,
    ConfirmationComponent,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    CalendarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,






  ],
  providers: [getAppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
