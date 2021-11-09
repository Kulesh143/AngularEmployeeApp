import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beforep',
  templateUrl: './beforep.component.html',
  styleUrls: ['./beforep.component.css']
})
export class BeforepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }kal:any=this.router.getCurrentNavigation().extras.state.example;
  public yeah(): void {
   
        this.router.navigate(['/payp'], { state: { example: this.kal } });
    
  }
}
