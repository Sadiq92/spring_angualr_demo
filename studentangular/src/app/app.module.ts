import { SrudentRegisterationService } from './srudent-registeration.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [SrudentRegisterationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
