import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  allDetails: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getAll().subscribe((data) => {
      this.allDetails = data;
    });
  }
  deleteItem(id: number) {
    this.studentService.deleteData(id).subscribe({
      next: (data) => {
        this.allDetails = this.allDetails.filter((_) => _.id != id);
      },
    });
  }
}
