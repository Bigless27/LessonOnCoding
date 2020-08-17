import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewChildComp } from './viewchild/viewchild.component';
import { ParentComponent } from './child/child.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';


const routes: Routes = [
  { path: '', component: TypeaheadComponent, pathMatch: 'full' },
  { path: 'viewchild', component: ViewChildComp },
  { path: 'child', component: ParentComponent },
  { path: 'typeahead', component: TypeaheadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
