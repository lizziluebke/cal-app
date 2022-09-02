// this is the real one !!!!!


import { Component, OnInit } from '@angular/core';
import { getAppointmentService } from '../services/getAppointments.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButton } from '@angular/material/button';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],

})
export class DateComponent implements OnInit {
  services: string[] = ['Tire Install', ' Tire Rotation', 'Battery Replacement'];
  selected: any;
  getAppointmentService: any;
  times: any = [];


  constructor(private http: HttpClient, private appointmentService : getAppointmentService) { }



  ngOnInit() {


  }



  selectedDate: any;

  showDate(datePicker: NgForm) {
    console.log(datePicker.value);
  }


   dateConverter (date: string) {
    let dateSTR = JSON.stringify(date);
    return dateSTR;
  }

   async dateChecker (date: string) {
      const formattedDate = this.dateConverter(date);
      let formattedSTR =  JSON.stringify(date);
      let formattedJSON = JSON.parse(formattedSTR);
      let search = '-';
      let replace = '';
      let res = formattedSTR.split(search).join(replace);
      console.log(res.substring(1,9));
      let dateResult = res.substring(1,9);
      let finalResult = this.appointmentService.getAppointments(dateResult, "1", "30");

      finalResult.forEach((xyz) => {
       console.log(xyz.appointmentSlots);








      });

      ;


        return finalResult;
}


}







