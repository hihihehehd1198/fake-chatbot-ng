import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatSurveyComponent } from './chat-survey/chat-survey.component';
// import { createCustomElement } from '@angular/elements'
@NgModule({
  declarations: [
    AppComponent,
    ChatSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbIconModule,
    // NbEvaIconsModule,
    NbLayoutModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(injector: Injector) {
  //   const el = createCustomElement(AppComponent, { injector });
  //   customElements.define('online-booking', el);
  // }

  // ngDoBootstrap() { }
}
