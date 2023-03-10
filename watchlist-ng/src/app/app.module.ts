import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    CheckListComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
