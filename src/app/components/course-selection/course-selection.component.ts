import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Courses } from 'src/app/interfaces/courses';
import { FormControl} from '@angular/forms';


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
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      console.log(courses)
    })

  }
  getCourse(){
    this.coursesService.getCourse(this.courseNameFC.value).subscribe(course => {
      this.courseInfo = course
      console.log(course)
    })
  }

  


}
