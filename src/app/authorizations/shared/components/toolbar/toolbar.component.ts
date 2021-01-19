import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sost-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
