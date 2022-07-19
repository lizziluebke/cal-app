import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  services: string[] = ['Tire install', ' Tire rotation', 'Battery replacement'];
  selected: any;
  constructor() { }

  ngOnInit(): void {
  }


  DateSelected : any;

  fetchDateSelected(){
    console.log("date selected by user  ..." + this.DateSelected())
  }


}


