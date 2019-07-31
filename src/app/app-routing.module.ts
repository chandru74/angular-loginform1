import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }