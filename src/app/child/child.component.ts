import { Component, OnInit, NgModule, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewChecked, AfterContentChecked } from '@angular/core'

@Component({
  selector: 'child-component',
  template: `This is the child`
})
export class ChildComponent implements OnInit {
  @Output() output = new EventEmitter();

  constructor(public cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.output.emit("this does not trigger a new change detection");
  }


}

@Component({
  selector: 'my-app',
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ParentComponent {
  public message;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {

  }

  output(message) {
    this.message = message;
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
}

