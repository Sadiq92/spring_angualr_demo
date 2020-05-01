import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SrudentRegisterationService {

  constructor(private http:HttpClient) { }

  
  public doRegistration(student){
    console.log(student);
    return this.http.post("http://localhost:9595/api/save-student",student,{responseType:'text' as 'json'});
  }

  public getStudents(){
    return this.http.get("http://localhost:9595/api/students-list");
  }

  public getStudentById(student_id){
    return this.http.get("http://localhost:9595/api/student"+student_id);
  }

  public deleteStudent(student_id){
    return this.http.delete("http://localhost:9595/api/delete-student/"+student_id);
  }
}
