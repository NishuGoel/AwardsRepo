import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import { EditStoryComponent } from './edit-story.component';
import { DisplayComponent } from '../display/display.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild([
      {path: 'display/:id', component: DisplayComponent}
    ])
  ],
  providers:[]
})
export class EditStoryModule { }
