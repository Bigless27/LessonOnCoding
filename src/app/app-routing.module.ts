import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewChildComp } from './viewchild/viewchild.component';
import { ParentComponent } from './child/child.component';


const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'viewchild', component: ViewChildComp },
  { path: 'child', component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
