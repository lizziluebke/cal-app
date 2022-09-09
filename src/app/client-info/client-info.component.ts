import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormGroupDirective, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
    clientForm: any;
    // this is a change

    email = new FormControl('', [Validators.required, Validators.email]);
    firstName = new FormControl('');
    lastName = new FormControl('');
    membershipNumber = new FormControl('');
    phoneNumber = new FormControl('');
    comments = new FormControl('');
    submitted: any;

    getErrorMessageEmail() {
      if (this.email.hasError('required')) {
        return 'You must enter a value'
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';

    }

    getErrorMessagename() {
      if (this.firstName.hasError('required')) {
        return 'You must enter a value'
      }
      return this.email.hasError('firstName') ? 'Not a valid first name' : '';

    }

    getErrorMessagelastName() {
      if (this.lastName.hasError('required')) {
        return 'You must enter a value'
      }
      return this.email.hasError('lastName') ? 'Not a valid last name' : '';

    }

    getErrorMessageMembershipNumber() {
      if (this.membershipNumber.hasError('required')) {
        return 'You must enter a value'
      }
      return this.email.hasError('membershipNumber') ? 'Not a valid membership number' : '';

    }

    getErrorMessagephoneNumber() {
      if (this.membershipNumber.hasError('required')) {
        return 'You must enter a value'
      }
      return this.email.hasError('phoneNumber') ? 'Not a valid phone number' : '';

    }

  constructor(private fb: FormBuilder) {

  }


    onSubmit() {
        this.submitted = true;
        alert('Success! Your appointment has been booked!');
        console.log("form submitted");
    }



  ngOnInit() {

  }



}
