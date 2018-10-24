import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { CustomeradminComponent } from './customeradmin/customeradmin.component';
import { CsaadminComponent } from './csaadmin/csaadmin.component';
import { LoginPageAdminComponent } from './login-page-admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeadminComponent, CustomeradminComponent, CsaadminComponent, LoginPageAdminComponent]
})
export class LoginPageAdminModule { }
