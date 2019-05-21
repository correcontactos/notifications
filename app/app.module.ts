import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NotyfModule} from 'ng-notyf';
import {NotificationService} from '../app/utility/notification.service'
import {FormsModule} from '@angular/forms';

import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,ToastrModule.forRoot()
    ,NotyfModule
    ,FormsModule
  ],
  providers: [NotificationService],
  bootstrap: [RootComponent]
})
export class AppModule { }
