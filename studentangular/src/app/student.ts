export class Student{


        student_id:number;
        student_name:string;
        student_email:string;
        student_branch:string;

        constructor(student_id : number, student_name : string , student_email : string, student_branch : string){
                this.student_id = student_id;
                this.student_name = student_name;
                this.student_email = student_email;
                this.student_branch = student_branch;
        }

}