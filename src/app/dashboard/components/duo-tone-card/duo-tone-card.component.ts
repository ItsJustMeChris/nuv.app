import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-component-duo-tone-card',
  templateUrl: './duo-tone-card.component.html',
  styleUrls: ['./duo-tone-card.component.css']
})
export class DuoToneCardComponent implements OnInit {
  @Input() header: string;
  @Input() tintedBackground: string;
  @Input() flip: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
