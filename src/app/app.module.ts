import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DocumentData } from './document.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataService } from './data.service';
import { DisplayComponent } from './display/display.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { EditStoryModule } from './edit-story/edit-story.module';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    DisplayComponent,
    EditStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  InMemoryWebApiModule.forRoot(DocumentData), HttpClientModule, FormsModule, ReactiveFormsModule, EditStoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
