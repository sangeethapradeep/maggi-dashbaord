import { EventService } from './../../services/event.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  refresh() {
    if (this.title === 'Jobs') {
      this.eventService.setRefresh();
    }
  }

}
