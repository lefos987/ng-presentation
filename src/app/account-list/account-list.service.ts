import {Injectable} from "@angular/core";
import Account from "./Account";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class AccountListService {

  constructor(private http: Http) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get('http://localhost:3000/api/accounts')
      .map((response: Response) => response.json().data as Account[]);
  }
}
