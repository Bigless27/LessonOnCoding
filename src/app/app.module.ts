import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildComp } from './viewchild/viewchild.component';
import { MainComponent } from './main/main.component';
import { ParentComponent, ChildComponent } from './child/child.component';
import { Pane } from './exampledirective/exampledirective.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComp,
    MainComponent,
    ParentComponent,
    ChildComponent,
    Pane,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
