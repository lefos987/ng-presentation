import {Component, OnInit} from "@angular/core";
import Account from './Account';
import ListItem from "../generic-list/ListItem";
import {AccountListService} from "./account-list.service";
import {Observable} from "rxjs";

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit{
  accounts: Array<Account>;
  selectedAccount: Account = new Account();

  constructor(private accountListService: AccountListService) {}

  ngOnInit() {
    const accounts$ : Observable<Account[]> = this.accountListService.getAccounts();

    accounts$.subscribe((accounts: Account[]) => {
      console.log('accounts', accounts);
      this.accounts = accounts;
    });
  }

  onAccountSelection($event: ListItem) {
    this.selectedAccount = new Account($event.id, $event.name);
  }
}
