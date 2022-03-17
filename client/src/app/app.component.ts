import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth';
  user: any = localStorage.getItem('user');

  constructor(private router: Router){
    if (this.user == null)
    {
      this.router.navigate(['/register']);
    } else if (this.user == 'false')
    {
      this.router.navigate(['/login']);
    } else
    {
      this.router.navigate(['/home']);
    }
  }

}
