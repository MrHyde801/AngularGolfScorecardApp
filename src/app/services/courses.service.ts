import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../interfaces/courses';
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }


  getCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>(`https://golf-courses-api.herokuapp.com/courses/`).pipe(
      map(response => response['courses'])
    )
  }

  getCourse(id: string): Observable<Courses> {
    return this.http.get<Courses>(`https://golf-courses-api.herokuapp.com/courses/${id}`).pipe(
    )
  }

}

// getCourse(id: string) {
//   this.coursesService.getCourse(id).subscribe(course => {
//     this.courseInfo = course;
//     console.log(course)
//   })
// }
