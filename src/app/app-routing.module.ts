import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { EditStoryComponent } from './edit-story/edit-story.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'display/:id', component: DisplayComponent, children:[
   { path: 'edit', component: EditStoryComponent, outlet: 'popup'}
  ]}, 
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 