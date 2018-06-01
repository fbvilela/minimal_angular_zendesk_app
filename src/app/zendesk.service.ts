import ZAFClient from 'zendesk_app_framework_sdk';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ZendeskService {
  private client;

  constructor() {
    this.client = ZAFClient.init();
  }

  async currentTicketId(): Promise<string> {
   return this.client.get('ticket.id').then(function({ 'ticket.id': id }) {
     return id;
    });
  }

  async currentUser(): Promise<User> {
    return this.client.get('currentUser').then(function({ currentUser }) {
      return <User> currentUser;
    });
  }

  // https://developer.zendesk.com/apps/docs/core-api/client_api#client.requestoptions
  async request(options: object) {
    return this.client.request(options);
  }

  async context(): Promise<object> {
    return this.client.context();
  }
}

interface User {
  name: string;
  email: string;
  id: number;
}
