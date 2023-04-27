import { Component } from '@angular/core';
import { ContestService } from 'src/app/core/services/contest.service';
import { MatTableDataSource } from '@angular/material/table';
import { Contest } from 'src/app/models/contest.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Problem } from 'src/app/models/problem.model';
@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent {
  displayedColumns: string[] = ['id', 'name'];
  problemsList!:      MatTableDataSource<Problem>

  constructor(private route: ActivatedRoute, private contestService: ContestService, private router: Router) {}
  contestId:any;
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.contestId = params['contestId']; // Convert the id parameter to a number using the "+" symbol
       
      this.contestService.fetchContestQuestions(this.contestId).then((x:any)=>{
        const problemList:any=x.problems;
        this.problemsList = new MatTableDataSource<Problem>(problemList);
      }
     
      );
     
    });
  
  }
  goToProblem(id:any){
    console.log("hi")
    this.router.navigate(['contests',this.contestId, id]);
  }
}
