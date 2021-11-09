import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  AForm = new FormGroup({
    email: new FormControl("", [Validators.required])
    
  });
  route: ActivatedRoute
  constructor(private router: Router  ) {
    
  }
   

  ngOnInit(): void {
  }

  public loginCheck(AForm: NgForm): void {
 
   let e= (<HTMLInputElement>document.getElementById('email')).value;
    let pass=(<HTMLInputElement>document.getElementById('password')).value;
    if(e=="Kulesh"&&pass=="143"){
      alert("Login Success!!!");
      this.router.navigate(['/adpage']);
      e=null;
      pass=null;
    }
  }
}
