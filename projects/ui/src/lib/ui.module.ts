import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared';

import { UiComponent } from './ui.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [UiComponent, DropdownComponent, AlertComponent],
  imports: [BrowserModule, RouterModule, SharedModule],
  exports: [UiComponent, DropdownComponent, AlertComponent],
})
export class UiModule {}
