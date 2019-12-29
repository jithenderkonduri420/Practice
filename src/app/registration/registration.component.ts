import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { AlertService } from '../core/services/alert.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private alertService: AlertService
  ) {
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
     // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.authService.register(this.registerForm.value).subscribe(resp => {
      this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
