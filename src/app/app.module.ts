import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [AppComponent, AsyncPipeComponent, SubscribeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
