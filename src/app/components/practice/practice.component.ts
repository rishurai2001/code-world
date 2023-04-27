import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PracticeService } from 'src/app/core/services/practice.service';
 

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent {
 
  problemsList!:MatTableDataSource<Problem>
  displayedColumns: string[] = ['id', 'name'];
  constructor(private practiceService: PracticeService,  private router: Router){}
  

 ngOnInit(){
  this.practiceService.fetchAllProblems().then((x:any)=>{
    const problemList:any=[];
    console.log(x);
    x.forEach( (y:any)=> problemList.push(y))
    // this.problemsList = new MatTableDataSource<Contest>(problemList);
    this.problemsList = new MatTableDataSource<Problem>(problemList);
  })
 }
 goToProblem(problemId:any){
  console.log("going to problem", problemId)
  this.router.navigate(['practice',problemId]);
  
 }

}
interface Problem {
  name: string;
  value: number;
}
