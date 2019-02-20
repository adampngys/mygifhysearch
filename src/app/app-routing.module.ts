import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';
import { DisplayComponent } from './components/display.component';

const ROUTES: Routes = [
  { path: '', component: SearchComponent},
  { path: 'home', component: SearchComponent },
  { path: 'display/:gifname', component: DisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
