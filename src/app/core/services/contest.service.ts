import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contest } from 'src/app/models/contest.model';
import { contestsList } from 'src/assets/dummyData/contestsList';
import {problemNameList} from 'src/assets/dummyData/problemNameList';
import { Problem } from 'src/app/models/problem.model';
import  {problemList} from 'src/assets/dummyData/problemList'
@Injectable({
  providedIn: 'root'
})
export class ContestService {
  fetchAllcontests():Observable<Contest[]> {
    
    const dummyContests: Contest[] = contestsList;
    
  
    return of(dummyContests);
  }
  fetchContestQuestions=async (id:any)=> {
    const dummyProblems:Contest|undefined=contestsList.find((data:Contest)=>data.id==id);
    console.log(dummyProblems)
    return dummyProblems;
  }
  async fetchOneQuestion( problemId:any){
      const problem=problemList.find((data:Problem)=>data.id==problemId)
      console.log(problem);
      return problem;
  }

  constructor() { }
}
