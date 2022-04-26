import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Courses } from 'src/app/interfaces/courses';
import { CoursesService } from 'src/app/services/courses.service';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Yardage', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: "Par", name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: "Handicap", name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: "Player 1", name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit(): void {
  }


}
