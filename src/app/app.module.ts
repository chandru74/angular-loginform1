import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AppRoutingModule} from './app-routing.module';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {EmailValidator} from './sign-up/email.validator';
import {PasswordValidator} from './sign-up/password.validator';
import { LoginService } from './login/login.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,  SignUpComponent, LoginComponent,EmailValidator,PasswordValidator ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
