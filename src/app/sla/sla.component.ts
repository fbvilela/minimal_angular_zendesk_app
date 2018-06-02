import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.css']
})
export class SlaComponent implements OnInit {
  @Input() policyId: number;
  @Input() title: string;
  @Input() state: string;
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

}
