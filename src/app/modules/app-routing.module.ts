import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectionComponent } from '../components/course-selection/course-selection.component';
import { SavedGamesComponent } from '../components/saved-games/saved-games.component';
import { ScoreCardComponent } from '../components/score-card/score-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'course-selection', pathMatch: 'full' },
  { path: 'course-selection', component: CourseSelectionComponent },
  { path: 'score-card', component: ScoreCardComponent },
  { path: 'saved=games', component: SavedGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
