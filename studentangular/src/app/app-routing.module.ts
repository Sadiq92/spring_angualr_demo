import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { SrudentRegisterationService } from './srudent-registeration.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegisterComponent},
   {path:"search",component:ViewstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
