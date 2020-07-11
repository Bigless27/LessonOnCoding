import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildComp } from './viewchild/viewchild.component';
import { MainComponent } from './main/main.component';
import { ParentComponent, ChildComponent } from './child/child.component';
import { Pane } from './exampledirective/exampledirective.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComp,
    MainComponent,
    ParentComponent,
    ChildComponent,
    Pane
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
