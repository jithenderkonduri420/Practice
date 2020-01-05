import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../core/services/employee.service';
import { AlertService } from '../core/services/alert.service';



@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  editEmp: FormGroup;
  submitted = false;
  id: any;
  empObj: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params);
    this.editEmp = this.formBuilder.group({
      empname: ['', Validators.required],
      department: ['', Validators.required],
      phonenumber: ['', Validators.required],
      gander: ['', Validators.required],
      address: ['', Validators.required],
      worktype: ['', Validators.required]
    });
    const id = this.route.snapshot.params.id;
    this.empService.getSingel(id).subscribe(
      emp => {
        this.empObj = emp;
        this.editEmp.setValue({
          empname: this.empObj.empname,
          department: this.empObj.department,
          phonenumber: this.empObj.phonenumber,
          gander: this.empObj.gander,
          address: this.empObj.address,
          worktype: this.empObj.worktype
        });
    });
  }

  get addemp() { return this.editEmp.controls; }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.editEmp.invalid) {
      return;
  }
  const id = this.route.snapshot.params.id;
  this.empService.put(this.editEmp.value, id).subscribe(
    emp => {
    this.submitted = false;
    this.editEmp.reset();
    this.alertService.success('Employee created successfuly.');
    this.router.navigate(['/emp-list']);
  });
}
}
