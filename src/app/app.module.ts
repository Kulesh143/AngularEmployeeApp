import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SocialLoginModule,SocialAuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider}from 'angularx-social-login';
import { MainComponent } from './main/main.component'
// import { Ng2TelInputModule } from 'ng2-tel-input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CountryComponent } from './country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AhomeComponent } from './ahome/ahome.component';
import { PaypComponent } from './payp/payp.component';
import { ThanksComponent } from './thanks/thanks.component';
import { BeforepComponent } from './beforep/beforep.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    HomeComponent,
    MainComponent,
    CountryComponent,
    AdminloginComponent,
    AdminpageComponent,
    AhomeComponent,
    PaypComponent,
    ThanksComponent,
    BeforepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
    BsDropdownModule.forRoot(),
		NgxIntlTelInputModule,
    HttpClientModule, FormsModule,
    RouterModule,
    routing,SocialLoginModule,
  Ng2TelInputModule
  ],
  providers: [UserService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '712482930813-586gsug5ao343m17cp9cmur73avp6hlg.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('373685497784055')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
