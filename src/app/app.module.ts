import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {RoutersModule} from "./routers.module";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RoutersModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
