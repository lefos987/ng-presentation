import {NgModule} from "@angular/core";
import {AccountListComponent} from "./account-list.component";
import GenericListModule from "../generic-list/generic-list.module";
import accountListRoutes from './account-list.routes';
import {AccountListService} from "./account-list.service";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [AccountListComponent],
  imports: [
    GenericListModule,
    HttpModule,
    CommonModule,
    accountListRoutes
  ],
  exports: [AccountListComponent],
  providers: [AccountListService]
})
export default class AccountListModule {}
