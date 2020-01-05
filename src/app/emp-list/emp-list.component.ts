import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  emp: any;
  constructor(
    private empService: EmployeeService
  ) { }

  ngOnInit() {
    this.empService.get().subscribe(empObj => {
      this.emp = empObj;
      console.log(this.emp);
    });
  }

deleteRow(emp) {
          this.empService.delete(emp._id).subscribe(e => {
            this.emp.splice(this.emp.indexOf(emp), 1);
          });
      }
}
