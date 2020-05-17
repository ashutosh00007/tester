import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})

/*@NgModule({
  imports: [
      CommonModule
    ]
 })*/

export class EmpdetailComponent implements OnInit {

  public employees=[];
  

  constructor(private _employeeService:EmpserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees();
    
  }

 
  

}
