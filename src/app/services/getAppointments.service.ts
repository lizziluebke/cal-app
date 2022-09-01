import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { Observable } from "rxjs";
import { createAppointmentRequest, createAppointmentResponse, getAppointmentResponse } from 'src/app/models/appointmentModels';

@Injectable({
  providedIn: 'root',
})

export class getAppointmentService {
  private times: any = [];


  constructor(private http: HttpClient){}

    createAppointment(appointmentRequest: createAppointmentRequest): Observable<createAppointmentResponse> {
      return this.http.post<createAppointmentResponse>(
        `/api/en-us/110/487/MemberAppointment/v1/createAppointment`, appointmentRequest
      );

    }

    getAppointments(startDate: any, numDays: string, durationMinutes: string) {
      return this.http.get<getAppointmentResponse>(

        `https://app-tires-appointment-dev-westus2-001.azurewebsites.net/api/en-US/110/487/MemberAppointment/v1/getOpenings?startDate=${startDate}&numDays=${numDays}&durationMinutes=${durationMinutes}`

      ).pipe((res) => {
            let resSTR = JSON.stringify(res);
            let resJSON = JSON.parse(resSTR);
            this.times = res;
            //console.log(res);
            return res;
        })
      }
    }


