import { Component, OnInit } from '@angular/core';
import { getAppointmentService } from '../services/getAppointments.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  services: string[] = ['Tire install', ' Tire rotation', 'Battery replacement'];
  selected: any;
  getAppointmentService: any;
  constructor() { }

  ngOnInit() {
    this.getAppointmentService.getAppointments()
    console.log("appointment");
  }


  DateSelected : any;

  fetchDateSelected(){
    console.log("date selected by user  ..." + this.DateSelected())
  }


}


