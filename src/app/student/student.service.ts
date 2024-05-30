import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Student[]>('http://localhost:3000/student');
  }
  createData(data: Student) {
    return this.http.post<Student[]>('http://localhost:3000/student', data);
  }
  editData(id: number) {
    return this.http.get<Student>(`http://localhost:3000/student/${id}`);
  }
  updateData(data: Student) {
    return this.http.put<Student>(
      `http://localhost:3000/student/${data.id}`,
      data
    );
  }
  deleteData(id: number) {
    return this.http.delete<Student>(`http://localhost:3000/student/${id}`);
  }
}
