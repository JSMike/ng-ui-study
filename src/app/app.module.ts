import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  IgxCheckboxModule,
  IgxIconModule,
  IgxListModule,
  IgxDialogModule,
  IgxNavbarModule,
  NavigationDrawerModule,
  IgxProgressBarModule,
  IgxRadioModule,
  IgxSwitchModule,
  IgxTabBarModule,
  IgxCardModule,
  IgxSnackbarModule,
  IgxButtonGroupModule,
  IgxRangeModule,
  IgxButtonModule,
  IgxInput,
  IgxRippleModule,
  IgxLabelModule
} from 'igniteui-js-blocks/main';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    IgxCheckboxModule,
    IgxIconModule,
    IgxListModule,
    IgxDialogModule,
    IgxNavbarModule,
    NavigationDrawerModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxSwitchModule,
    IgxTabBarModule,
    IgxCardModule,
    IgxSnackbarModule,
    IgxButtonGroupModule,
    IgxRangeModule,
    IgxButtonModule,
    IgxInput,
    IgxRippleModule,
    IgxLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
