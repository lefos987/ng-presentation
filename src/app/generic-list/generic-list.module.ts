import {NgModule} from "@angular/core";
import {GenericListComponent} from "./generic-list.component";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [GenericListComponent],
  exports: [GenericListComponent],
  imports: [CommonModule]
})
export default class GenericListModule {}
