import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  

  constructor(private http: HttpClient) { }
  
  submitInContest(contestId:any, questionId:any, userId:any, code:any){

  }
  submitInPractice(questionId:any, userId:any, code:any){

  }
  
}
