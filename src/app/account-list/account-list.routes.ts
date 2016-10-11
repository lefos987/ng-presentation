import {Routes, RouterModule} from "@angular/router";
import {AccountListComponent} from "./account-list.component";
const routes: Routes = [
  { path: '', component: AccountListComponent }
];
export default RouterModule.forChild(routes);
