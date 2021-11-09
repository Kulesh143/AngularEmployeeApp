import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { query } from '@angular/animations';
//require('angular-countries');
@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {
  public user: User[];
  public editUser: User;
  public deleteUser: User;
  userlogged:boolean;
  constructor(private userService: UserService){}
  
//
// searchByJob?:string;
// jobSuggections$?: Observable<User[]>;
// //





  ngOnInit() {
  //  this.userService.findUserByJob(history.state.name);
    //this.userlogged= false;
   // this.searchUsers(1);
  //  let hel=document.getElementById('searchName');
  //   hel=history.state.name;
  //   //alert(hel);
    // this.searchUsers(hel);
    // alert("JJJ");
    this.getUsers();
    
    // nameStat:String=history.state.name;
    
    // this.userService.findUserByJob(history.state.name);
  //  this.find(history.state.name);
 // this.searchUsers(history.state.name);
//alert(history.state.name);

  }
  nameStat:any=history.state.name;
  
  public onU(): void {
    this.userlogged = true;

  }
  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.user = response;
       // console.log(this.user);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  //   getUserByJob() {
  //     this.jobSuggections$ = new Observable((observer: Observer<string | undefined>) => {
  //       observer.next(this.searchByJob);
  //     }).pipe(
  //       switchMap((query: string) => {
  //         if(query){
  //           return this.userService.findUserByJob(query);
  //         }
  //         return of([]);
  //       })
  //     );
  // }

  // public findUserByJob(job:String){
  //   this.userService.findUserByJob(job).subscribe(
  //     (response: User[]) => {
  //       this.user = response;
  //       console.log(this.user);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // findUserByJob(job: String){
  //   this.userService.findUserByJob(job).subscribe(response:User)=>{
      
  //   });
  // }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

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
  // public find(job: string): void {
  //   this.userService.findUserByJob(job).subscribe(
  //     (response: void) => {
        
  //        this.getUsers();
  //         console.log(this.user);
  //         this.getUsers
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );
  //   }

  public searchUsers(key:any): void {
  //  let hel=document.getElementById('searchName');
  //   hel=history.state.name;
  //   alert(hel);
    let results: User[] = [];
    for (let user of this.user) {
      if (user.job.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
        results.push(user);
      }
    }
    this.user = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }
  public onAddStop(addForm: NgForm): void {
    var frm = document.getElementById("logForm").click;




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

  // public findUserByJob(job:string): void {
    
  //   // const containerw = document.getElementById('searchName');
  //   // containerw.setAttribute('value', history.state.name);
 
    
  //   const results: User[] = [];
  //   for (const user of this.user) {
  //     if (user.job.toLowerCase().indexOf(job.toLowerCase()) !== -1
  //    ) {
  //       results.push(user);
  //     }
  //   }
  //   this.user = results;
  //   if (results.length === 0 || !job) {
  //     this.getUsers();
  //   }
  // }


}
