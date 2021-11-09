import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AppComponent } from './app.component';
import { BeforepComponent } from './beforep/beforep.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PaypComponent } from './payp/payp.component';
import { SocialComponent } from './social/social.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
  {path : '', component :MainComponent},
  {path : 'app', component : AppComponent},
  {path : 'home', component : HomeComponent},
  {path : 'social', component : SocialComponent},
  {path:'country',component:CountryComponent},
  {path:'adlog',component:AdminloginComponent},
  {path:'adpage',component:AdminpageComponent},
  {path:'ahome',component:AhomeComponent},
  {path:'payp',component:PaypComponent},
  {path:'thank',component:ThanksComponent},
  {path:'beforep',component:BeforepComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });