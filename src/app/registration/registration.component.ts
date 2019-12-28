import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {
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
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.userService.create(this.registerForm.value).subscribe(resp => {
      this.registerForm.reset();
      this.toastr.success('User Registration Successfully', 'Toastr fun!');
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
