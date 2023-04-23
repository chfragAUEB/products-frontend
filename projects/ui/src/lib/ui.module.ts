import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [UiComponent, DropdownComponent, AlertComponent],
  imports: [CommonModule, RouterModule],
  exports: [UiComponent, DropdownComponent, AlertComponent],
})
export class UiModule {}
