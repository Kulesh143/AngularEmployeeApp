import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {render}from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-payp',
  templateUrl: './payp.component.html',
  styleUrls: ['./payp.component.css']
})
export class PaypComponent implements OnInit {

  constructor(private router: Router) { 
    alert(this.router.getCurrentNavigation().extras.state.example);
//     render(
//       {
// id:"#myPaypalButtons",
// currency:"USD",
// value:"20.00",
// onApprove:(details)=>{
// alert("Transaction Successfull");
// }

//       }
//     );
  }
 kal:any=this.router.getCurrentNavigation().extras.state.example;
  ngOnInit(): void {
    render(
      {
id:"#myPaypalButtons",
currency:"USD",
value:"20.00",
onApprove:(details)=>{
alert("Transaction Successfull");
alert(this.kal);
this.router.navigate(['/thank'], { state: { tik: this.kal } });

}

      }
    );
    // alert(history.state.email);
  }
 


}
