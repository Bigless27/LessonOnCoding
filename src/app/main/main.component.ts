import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public showError = false;
  public showHooks = false;
  constructor() { }

  ngOnInit(): void {
  }

  public displayError() {
    this.showError = true;
  }

  public displayHooks() {
    this.showHooks = true;
  }

}
