import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link[text][href]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() href = '';
  @Input() text = '';

  constructor() {}

  ngOnInit() {}
}
