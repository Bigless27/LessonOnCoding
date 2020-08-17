import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Pane } from '../exampledirective/exampledirective.component';

@Component({
  selector: 'example-app',
  template: `
    <pane id="Pikachu" *ngIf="shouldShow"></pane>
    <pane id="Giritina" *ngIf="!shouldShow"></pane>

    <div class="flex-container flex-column flex-center">  
      <img height="400px" width="400px" *ngIf="selectedPane === 'Pikachu'" src="../../assets/pikachu.gif" />
      <img height="400px" width="400px" *ngIf="selectedPane === 'Giritina'" src="../../assets/pokemongiritina.gif" />
      <div class="flex-container flex-column flex-center" style="margin-top: 40px;">
        <div>
          <h2>Selected Directive: {{selectedPane}}</h2>
        </div>
        <button (click)="toggle()" class="btn btn-primary">Toggle</button>
      </div>
    </div>
  `,
})
export class ViewChildComp {
  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    })
  }

  selectedPane: string = '';

  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}