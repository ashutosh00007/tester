import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})

/*@NgModule({
  imports: [
      CommonModule
    ]
 })*/

export class EmplistComponent implements OnInit {

  public employees=[];

  constructor(private _employeeService: EmpserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees();  
   
    
  }

}
