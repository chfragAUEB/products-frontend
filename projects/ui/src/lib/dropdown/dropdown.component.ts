import { Component, Input } from '@angular/core';
import { MenuItem } from '../ui.interfaces';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() items: MenuItem[] = [{ text: 'sample text', link: 'sample-link' }];
  @Input() dropdownLabel = 'Dropdown';
}
