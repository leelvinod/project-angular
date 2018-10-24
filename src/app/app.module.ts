import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './landing-page/home/home.component';
import { AboutusComponent } from './landing-page/aboutus/aboutus.component';
import { ContactusComponent } from './landing-page/contactus/contactus.component';
import { LoginComponent } from './landing-page/login/login.component';
import { CsaadminComponent } from './login-page-admin/csaadmin/csaadmin.component';
import { CustomeradminComponent } from './login-page-admin/customeradmin/customeradmin.component';
import { HomeadminComponent } from './login-page-admin/homeadmin/homeadmin.component';
import { CustomercsaComponent } from './login-page-csa/customercsa/customercsa.component';
import { HomecsaComponent } from './login-page-csa/homecsa/homecsa.component';
import { LandingPageComponent } from './landing-page/Landing-page.component';
import { LoginPageAdminComponent } from './login-page-admin/login-page-admin.component';
import { LoginPageCSAComponent } from './login-page-csa/login-page-csa.component';
import { RegisterComponent } from './landing-page/register/register.component';
import { CustomerComponent } from './login-page-admin/customeradmin/customer/customer.component';
import { CustomerCreateComponent } from './login-page-admin/customeradmin/customer-create/customer-create.component';
import { CustomerDetailComponent } from './login-page-admin/customeradmin/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './login-page-admin/customeradmin/customer-edit/customer-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CarouselModule} from 'ngx-bootstrap/carousel';


const paths: Routes = [
  {path:'', redirectTo:'landingpage/home',pathMatch:'full'},
    { path: 'customeradmin', component:CustomeradminComponent},
   { path: 'customercsa', component:CustomercsaComponent},
  { path: 'homecsa', component:HomecsaComponent},
  {path :'landingpage',component:LandingPageComponent, children:[
  { path: 'home', component:HomeComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'contactus', component:ContactusComponent},
  { path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
  ]},

  {path :'loginadmin',component:LoginPageAdminComponent , children:[
    { path: 'homeadmin', component:HomeadminComponent},
    { path: 'customeradmin', component:CustomeradminComponent, children:[
      {path:'customer32',component:CustomerComponent},
      {path:'customercreate',component:CustomerCreateComponent},
      {path:'customeredit/:id',component:CustomerEditComponent},
      {path:'customerdetail/:id',component:CustomerDetailComponent}
    ]},
    { path: 'csaadmin', component:CsaadminComponent}
  ]},
  {path:'logincsa',component:LoginPageCSAComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    CsaadminComponent,
    CustomeradminComponent,
    HomeadminComponent,
    CustomercsaComponent,
    HomecsaComponent,
    LandingPageComponent,
    LoginPageAdminComponent,
    LoginPageCSAComponent,
    RegisterComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths),
    
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
