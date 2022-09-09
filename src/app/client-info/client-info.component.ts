import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormGroupDirective, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
    firstName = new FormControl('', [Validators.required]);


    getErrorMessage(b: string) {
      let a = "you must enter a value";
      if (this.firstName.hasError('required')) {
        console.log(a);
        return;
      }
    }
  constructor() {
  }

  ngOnInit() {
      // this.userValidation = this.formBuilder.group({
      //   firstName: ['', [Validators.required, Validators.minLength(3),
      //   Validators.maxLength(20), Validators.pattern('[a-zA-Z')]]
      // });
  }



}
