import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getAppointmentService } from '../services/getAppointments.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private http: HttpClient, private appointmentService: getAppointmentService) { }

  ngOnInit(): void {

  }





}
