import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() header: string;

  constructor() { }

  ngOnInit(): void {
  }

}
