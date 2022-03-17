import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  childForm: FormGroup = new FormGroup({
    'id' : new FormControl(0),
    'name' : new FormControl('', Validators.required),
    'email' : new FormControl('', Validators.required),
    'password' : new FormControl(0),
    'phone' : new FormControl(''),
  });

  constructor(private httpAuth: AuthService) { }

  ngOnInit(): void {
  }

}
