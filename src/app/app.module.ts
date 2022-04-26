import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { CourseSelectionComponent } from './components/course-selection/course-selection.component';
import { TeeBoxSelectionComponent } from './components/tee-box-selection/tee-box-selection.component';
import { SavedGamesComponent } from './components/saved-games/saved-games.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseSelectionComponent,
    TeeBoxSelectionComponent,
    SavedGamesComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
