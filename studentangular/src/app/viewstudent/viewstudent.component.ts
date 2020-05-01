import { SrudentRegisterationService } from './../srudent-registeration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss']
})
export class ViewstudentComponent implements OnInit {
  students:any;
  student_id:number;

  constructor(private service: SrudentRegisterationService) { }

  public deleteStudent(student_id:number){
    let resp= this.service.deleteStudent(student_id);
    resp.subscribe((data)=>this.students=data);
   }

   public findStudentById(){
    let resp= this.service.getStudentById(this.student_id);
    console.log(resp);
    resp.subscribe((data)=>this.students=data);
   }

  ngOnInit() {
    let resp=this.service.getStudents();
    resp.subscribe((data)=>this.students=data);
  }

  }


