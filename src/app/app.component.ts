import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { getAppointmentService } from './services/getAppointments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cal-app';



  constructor(private http: HttpClient, private AppointmentService : getAppointmentService) {

  }
  ngOnInit() {

  }

}
