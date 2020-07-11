import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'child-component',
  template: `This is the child`
})
export class ChildComponent implements OnInit {
  @Output() output = new EventEmitter();

  ngOnInit() {
    this.output.emit({ value: "this does not trigget a new change detection" });
    // setTimeout(() => { this.output.emit("this has been updated correctly by change detection") }, 1000);
  }
}

@Component({
  selector: 'my-app',
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ParentComponent {
  public message;

  output(message) {
    this.message = message;
  }
}

