import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmitService } from 'src/app/core/services/submit.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  contestId:any;
  problemId:any;
  //  string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private submitService: SubmitService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contestId = params['contestId'];
      this.problemId = params['problemId'];
      console.log(this.contestId)
      // Make a GET request to the server using the HttpClient service
      this.http.get(`http://example.com/api/contests/${this.contestId}/problems/${this.problemId}`).subscribe((data) => {
     
      });
    });
  }
  submitInContest(){
    this.submitService.submitInContest(this.contestId,this.problemId,"","");
  }
  submitInPractice(){
    this.submitService.submitInPractice("","","")
  }

}


