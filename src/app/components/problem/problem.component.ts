import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmitService } from 'src/app/core/services/submit.service';
import { Problem } from 'src/app/models/problem.model';
import { PracticeService } from 'src/app/core/services/practice.service';
import { ContestService } from 'src/app/core/services/contest.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  contestId:any;
  problemId:any;
  problem!:any;
  //  string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private submitService: SubmitService,
    private practiceService: PracticeService,
    private contestService: ContestService

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contestId = params['contestId'];
      this.problemId = params['problemId'];
     
      // Make a GET request to the server using the HttpClient service
     if(this.contestId){
      console.log(this.contestId)
      console.log("you are in a contest")
          this.contestService.fetchOneQuestion(this.problemId).then((x)=>{
                this.problem=x;
                console.log(this.problem)
          })
     }
     else{
      console.log(this.problemId)
      this.practiceService.fetchOneProblem(this.problemId).then((x)=>{
        this.problem=x;
        console.log(this.problem.title)
      })

     }
    });
  }
  submitInContest(){
    this.submitService.submitInContest(this.contestId,this.problemId,"","");
  }
  submitInPractice(){
    this.submitService.submitInPractice("","","")
  }

}


