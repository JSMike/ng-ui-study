import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  SuiCheckboxModule,
  SuiDropdownModule,
  SuiMessageModule,
  SuiPopupModule,
  SuiProgressModule,
  SuiSelectModule,
  SuiSidebarModule,
  SuiTabsModule
} from 'ng2-semantic-ui';

import { DemoComponent } from './demo/demo.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiCheckboxModule,
    SuiDropdownModule,
    SuiMessageModule,
    SuiPopupModule,
    SuiProgressModule,
    SuiSelectModule,
    SuiSidebarModule,
    SuiTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
