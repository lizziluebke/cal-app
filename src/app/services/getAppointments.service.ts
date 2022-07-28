import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { createAppointmentRequest, createAppointmentResponse, getAppointmentResponse } from 'src/app/models/appointmentModels';

@Injectable({
  providedIn: 'root',
})

export class getAppointmentService {

  constructor(private http: HttpClient) {

  }
    createAppointment(appointmentRequest: createAppointmentRequest): Observable<createAppointmentResponse> {
      return this.http.post<createAppointmentResponse>(
        `/api/en-us/110/487/MemberAppointment/v1/createAppointment`, appointmentRequest
      );

    }

    getAppointments() {
      return this.http.get<getAppointmentResponse>(
        '/api/en-us/110/487/MemberAppointment/v1/getOpenings'
      );
    }

}
