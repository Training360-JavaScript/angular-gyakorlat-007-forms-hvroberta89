import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';

import { Event } from '../../model/event';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event!: Event;

  constructor(
    private eService: EventService,
    private ar: ActivatedRoute,
  ) {
    this.ar.params.subscribe ( params => {
      this.eService.get( params['id'] ).forEach( event => {
        this.event = event;
      });
    });
  }

  ngOnInit(): void {
  }

  onUpdate(): void {
    this.eService.update(this.event)
      .forEach( value => {
        console.log("Update Event: ", value);
      })
  }

}
