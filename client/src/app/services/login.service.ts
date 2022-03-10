import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data: LoginModel): Observable<LoginModel>{
		return this.http.post<LoginModel>('http://localhost:3000/api/login', data);
	}
}
