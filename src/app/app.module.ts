import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormBuilder,ReactiveFormsModule} from '@angular/forms'
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import{HttpClientModule} from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
