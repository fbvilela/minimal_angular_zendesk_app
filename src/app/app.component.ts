import { Component } from '@angular/core';
import ZAFClient from 'zendesk_app_framework_sdk';
import { ZendeskService } from './zendesk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  app_name = 'Angular hackday';
  currentUser; context;

  constructor(zendeskService: ZendeskService) {
    zendeskService.currentUser().then( (currentUser) => {
      console.log('currentUser', currentUser);
      this.currentUser = currentUser;
    });

    zendeskService.request({
      url: '/api/v2/tickets.json',
      type: 'get'
    }).then( data => console.log(data) );
    zendeskService.currentTicketId().then((data) => console.log(data));
    zendeskService.context().then((data) => this.context = data);
  }

}
