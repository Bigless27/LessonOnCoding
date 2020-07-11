import { Component, Input, Directive, ViewChild } from '@angular/core';


@Directive({ selector: 'pane' })
export class Pane {
  @Input() id!: string;
}


