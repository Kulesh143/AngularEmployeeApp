import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


import {
  SearchCountryField,
  // TooltipLabel,
  CountryISO
} from "ngx-intl-tel-input";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Qatar];
  
  
  
  phoneForm = new FormGroup({
    phone: new FormControl("", [Validators.required])
    
  });
  
  userID: SocialUser;
  loggedIn: boolean;
  public user: User[];
  public editUser: User;
  public deleteUser: User;
  userlogged:boolean;
  constructor(private userService: UserService,private authService: SocialAuthService,private router: Router ){}
  separateDialCode = false;
	

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  ngOnInit() {
    this.phoneForm.patchValue({
      number: "+97431422391",
      internationalNumber: "+974 3142 2391",
      nationalNumber: "3142 2391",
      countryCode: "QA",
      dialCode: "+974"
    });
    
    
    this.getUsers();
    //this.userlogged= false;
    this.authService.authState.subscribe((userID) => {
      this.userID = userID;
      this.loggedIn = (userID != null);
    });

  }
  onCountryChange(event: { dialCode: any; name: any; iso2: any; })
  {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  
  public onU(): void {
    this.userlogged = true;

  }
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.user = response;
        console.log(this.user);
      },
      (error: HttpErrorResponse) => {
       alert(error.message);
      }
    );
  }
  route: ActivatedRoute;
  public onAddUser(phoneForm: NgForm): void {
    phoneForm.controls["name"].setValue(this.userID.name+" "+Math.floor((Math.random() * 200) + 1));
   phoneForm.controls["email"].setValue(this.userID.email);
    phoneForm.controls["job"].setValue(history.state.name);
    phoneForm.controls["phone"].setValue(phoneForm.form.value.phonee.internationalNumber);
    phoneForm.controls["country"].setValue(phoneForm.form.value.phonee.countryCode);
    // this.phoneForm.controls['phone'].value
    // phoneForm.controls['contactNo'].patchValue('8888888888');
    //  document.getElementById('add-user-form').click();
    
    this.userService.addUser(phoneForm.value).subscribe(
      (response: User) => {
        //console.log(response);
      
        // alert(phoneForm.form.value.phonee.internationalNumber);
        this.getUsers();
        phoneForm.reset();
        alert("Sign Up Successfull!");
        this.router.navigate(['/beforep'], { state: { example: this.userID.email } });
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
        phoneForm.reset();
      }
    );
  }
  
  // public onAdd(phoneForm: NgForm): void {
  //  // document.getElementById('add-user-form').click();
  //   phoneForm.controls["name"].setValue(this.userID.name);
  //       phoneForm.controls["email"].setValue(this.userID.email);
    
  // }

  public onUpdateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      (response:User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
    );
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const user of this.user) {
      if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.job.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.country.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.serialnumber.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.user = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }


  // nameStatus:boolean= false;
  // checkByDuplicateName(name: String){
  //   this.userService.findByNameDuplicate(name).subscribe((result:boolean)=>{
  //     console.log("name duplicate");
  //     this.nameStatus = result;
  //   });
  // }

}
