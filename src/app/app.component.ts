import { Component } from '@angular/core';
import ZAFClient from 'zendesk_app_framework_sdk';
import { ZendeskService } from './zendesk.service';
import flatten from 'lodash/flatten';
import filter from 'lodash/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  zendeskService;
  app_name = 'Sla monitoring';
  tickets;
  policyMetrics;
  slaPolicies;
  slaBreaches;

  getPolicyState(name: string) {
    return this.getBreachCount(name) === 0 ? 'green' : 'red';
  }

  getBreachCount(name: string) {
    return filter(this.slaBreaches, (breach) => (breach.metric === name)).length;
  }

  // getHighestWaitTime

  fetchSlaBreaches() {
    this.zendeskService.request({
      url: '/api/v2/tickets.json?include=slas',
      type: 'get'
    }).then(({ tickets }) => {
      this.policyMetrics = flatten(tickets.map( (ticket) => (
        ticket.slas.policy_metrics
      )));
      this.slaBreaches = filter(this.policyMetrics, (policy) => (
        policy.stage === 'active' && policy.minutes < 0
       ));
    });
  }

  constructor(zendeskService: ZendeskService) {
    this.zendeskService = zendeskService;
    zendeskService.request({
      url: '/api/v2/slas/policies',
      type: 'get'
    }).then( ({ sla_policies }) => {
      this.slaPolicies = sla_policies.map((policy) => ({
        id: policy.id, title: policy.policy_metrics[0].metric
      }));
    });
    setInterval(() => this.fetchSlaBreaches(), 5000);
  }
}
