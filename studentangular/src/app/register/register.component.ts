import { SrudentRegisterationService } from './../srudent-registeration.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 //student : Student = new Student(0,"abdul","abdul@gmail.com","BCA");
 student : Student = new Student(0,"","","");
 
  message:any;

  constructor(private service: SrudentRegisterationService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.student);
    console.log(this.student);
    resp.subscribe((data)=>this.message=data);
      }

}
