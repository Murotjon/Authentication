import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  login(data: LoginModel): Observable<LoginModel>{
		return this.http.post<LoginModel>('http://localhost:5000/api/login', data);
	}
}
