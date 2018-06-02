import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZendeskService } from './zendesk.service';
import { SlaComponent } from './sla/sla.component';

@NgModule({
  declarations: [
    AppComponent,
    SlaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZendeskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
