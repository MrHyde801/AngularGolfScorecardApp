import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Courses } from 'src/app/interfaces/courses';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss']
})
export class CourseSelectionComponent implements OnInit {
  courses: Courses[] = [];
  courseInfo!: Courses
  courseNameFC = new FormControl('')

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      console.log(courses)
    })

  }
  getCourse(courseId: string){
    this.coursesService.getCourseById(courseId).subscribe(course => {
      this.courseInfo = course
      this.router.navigate(['./score-card', {id: courseId}])
      console.log(course)
    })
  }
}
