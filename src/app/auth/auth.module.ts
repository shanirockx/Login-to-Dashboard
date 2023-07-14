import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [  
  { path: 'login', component: LoginComponent },  
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
