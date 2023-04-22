import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [UiComponent, DropdownComponent],
  imports: [CommonModule, RouterModule],
  exports: [UiComponent, DropdownComponent],
})
export class UiModule {}
