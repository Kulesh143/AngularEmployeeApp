import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(private router: Router) { alert(this.router.getCurrentNavigation().extras.state.tik); }
karlk:any=this.router.getCurrentNavigation().extras.state.tik;
  ngOnInit(): void {
  //  alert(this.karlk);
  }

}
