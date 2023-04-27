import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contest } from 'src/app/models/contest.model';
import { ContestService } from 'src/app/core/services/contest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent {
  
  displayedColumns: string[] = ['id', 'name', 'start', 'duration', 'startsIn'];
   
  // dataSource!:      MatTableDataSource<Contest>
  dataSourceToday!: MatTableDataSource<Contest>;
  dataSourcePast!: MatTableDataSource<Contest>;
  dataSourceFuture!: MatTableDataSource<Contest>;
 
  constructor(private contestService:ContestService, private router: Router){

  }
  ngOnInit(){
    this.contestService.fetchAllcontests().subscribe(data => {
      
      const now = new Date().getTime();
     
      const todayContests = data.filter((contest) => {
        const contestDate = new Date(contest.start).getTime();
        return contestDate === now;
      });
      this.dataSourceToday = new MatTableDataSource<Contest>(todayContests);

      const pastContests = data.filter((contest) => {
        const contestDate = new Date(contest.start).getTime();
        return contestDate < now;
      });
      this.dataSourcePast = new MatTableDataSource<Contest>(pastContests);

      const futureContests = data.filter((contest) => {
        const contestDate = new Date(contest.start).getTime();
        return contestDate > now;
      });
      this.dataSourceFuture = new MatTableDataSource<Contest>(futureContests);

      console.log(todayContests)
      console.log(pastContests)
      console.log(pastContests)
    });
  
  }
  goToContest(id:any){
    this.router.navigate(['contests', id]);
  }
}
