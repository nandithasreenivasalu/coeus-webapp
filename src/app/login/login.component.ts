import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "Govinda";
  constructor(private router:Router) { }
selectedUserType:string='';
  ngOnInit(): void {
  //  
    
  }
  login()
  {
    this.router.navigate(['/dashboard']);
  }
}
