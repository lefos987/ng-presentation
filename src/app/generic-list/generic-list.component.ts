import {Component, Input, Output, EventEmitter} from "@angular/core";
import ListItem from "./ListItem";
@Component({
  selector: 'generic-list',
  templateUrl: './generic-list.component.html'
})
export class GenericListComponent {
  @Input() allItems: Array<ListItem>;
  @Input() title;
  @Output() onSelect =  new EventEmitter<ListItem>();

  selectItem(item) {
    this.onSelect.emit(item);
  }
}
