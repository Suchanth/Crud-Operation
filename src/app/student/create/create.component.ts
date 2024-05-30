import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  formData: Student = {
    id: 0,
    name: '',
    department: '',
    place: '',
  };
  constructor(private studentService: StudentService, private router: Router) {}

  create() {
    this.studentService.createData(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['student/details']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
