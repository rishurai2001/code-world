import { Injectable } from '@angular/core';
import { problemList } from 'src/assets/dummyData/problemList';
import { problemNameList } from 'src/assets/dummyData/problemNameList';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
   dummyProblems:any=problemNameList;
  constructor() { }
   fetchAllProblems=async ()=> {
     
      return this.dummyProblems;
    }
    // return this.dummyProblems; 
  
    async fetchOneProblem(id:any){
       const problem=problemList.find((data)=>data.id==id);
       return problem
    }
  
}
