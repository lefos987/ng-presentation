import {Routes, RouterModule} from "@angular/router";
import {IntroComponent} from "./intro/intro.component";
const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'accounts', loadChildren: 'app/account-list/account-list.module' }
];

export default RouterModule.forRoot(routes);
