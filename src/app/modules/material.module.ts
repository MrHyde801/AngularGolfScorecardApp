import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule

  ],
  exports: [
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ]
})
export class MaterialModule { }
