import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllModelInterface } from '../interface/data-template';

@Injectable({
  providedIn: 'root'
})
export class StandardDownloadService {

  constructor(private http:HttpClient) {}

  baseurl:string = "https://resume-bluider-api.herokuapp.com/resume"

  downlaod(all:AllModelInterface, n:number) {
    return this.http.post(`${this.baseurl}-${n}`,all);
  }

}
