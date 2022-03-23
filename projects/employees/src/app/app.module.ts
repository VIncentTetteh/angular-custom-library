import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiFooterModule } from 'projects/ui-footer/src/lib/ui-footer.module';
import { UiNavbarModule } from 'projects/ui-navbar/src/lib/ui-navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiNavbarModule,
    UiFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
