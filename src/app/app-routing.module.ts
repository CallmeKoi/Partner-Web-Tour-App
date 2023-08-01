import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { PromoComponent } from './promo/promo.component';
import { BsPerformComponent } from './bs-perform/bs-perform.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: '',redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tour', component: TourComponent, children: [
    
  ]},
  {path: 'promo', component: PromoComponent},
  {path: 'bs-perform', component: BsPerformComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
