import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  BreadcrumbModule,
  ButtonModule,
  CheckboxModule,
  ChipsModule,
  DialogModule,
  DropdownModule,
  GrowlModule,
  InputSwitchModule,
  InputTextModule,
  MenuModule,
  PanelModule,
  ProgressBarModule,
  RadioButtonModule,
  SliderModule,
  TabViewModule,
  ToolbarModule,
  TooltipModule
} from 'primeng/primeng';

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
    BreadcrumbModule,
    ButtonModule,
    CheckboxModule,
    ChipsModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    InputSwitchModule,
    InputTextModule,
    MenuModule,
    PanelModule,
    ProgressBarModule,
    RadioButtonModule,
    SliderModule,
    TabViewModule,
    ToolbarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
