import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor() { }

  getEmployees(){
    let a=[
      {"id":"1", "name":"Ashutosh", "age":"21" },
      {"id":"2", "name":"Anurag", "age":"22" },
      {"id":"3", "name":"Daman", "age":"23" },
      {"id":"4", "name":"Ravi", "age":"24" }
    ];

    return a;
  }



}
