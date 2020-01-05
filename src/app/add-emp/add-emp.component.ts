import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../core/services/employee.service';
import { AlertService } from '../core/services/alert.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})

export class AddEmpComponent implements OnInit {
  createEmp: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.createEmp = this.formBuilder.group({
            empname: ['', Validators.required],
            department: ['', Validators.required],
            phonenumber: ['', Validators.required],
            gander: ['', Validators.required],
            address: ['', Validators.required],
            worktype: ['', Validators.required]
  });
  }

  get addemp() { return this.createEmp.controls; }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.createEmp.invalid) {
      return;
  }
  console.log(this.createEmp.value);
  this.empService.create(this.createEmp.value).subscribe(
    emp => {
    this.submitted = false;
    this.createEmp.reset();
    this.alertService.success('Employee created successfuly.');
    this.router.navigate(['/emp-list']);
  });
}
// onReset() {
//   this.submitted = false;
//   this.createEmp.reset();
// }

}

