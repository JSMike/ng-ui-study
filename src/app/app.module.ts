import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NglBadgesModule} from 'ng-lightning/badges/module';
import {NglBreadcrumbsModule} from 'ng-lightning/breadcrumbs/module';
import {NglButtonsModule} from 'ng-lightning/buttons/module';
import {NglFormsModule} from 'ng-lightning/forms/module';
import {NglIconsModule} from 'ng-lightning/icons/module';
import {NglModalsModule} from 'ng-lightning/modals/module';
import {NglNotificationsModule} from 'ng-lightning/notifications/module';
import {NglPopoversModule} from 'ng-lightning/popovers/module';
import {NglSpinnersModule} from 'ng-lightning/spinners/module';
import {NglTabsModule} from 'ng-lightning/tabs/module';
import {NglConfig, NGL_CONFIG} from 'ng-lightning/config/config';
import {INglConfig} from 'ng-lightning/config/config.interface';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NglBadgesModule,
    NglBreadcrumbsModule,
    NglButtonsModule,
    NglFormsModule,
    NglIconsModule,
    NglModalsModule,
    NglNotificationsModule,
    NglPopoversModule,
    NglSpinnersModule,
    NglTabsModule
  ],
  providers: [
    { provide: NGL_CONFIG, useValue: <INglConfig>{} },
    NglConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
