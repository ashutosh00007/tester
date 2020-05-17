import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public employees=[];

  constructor(private _employeeService: EmpserviceService) { }

  ngOnInit(): void {
    this.employees=this._employeeService.getEmployees();  
  }

}
