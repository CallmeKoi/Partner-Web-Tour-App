import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { PromoComponent } from './promo/promo.component';
import { BsPerformComponent } from './bs-perform/bs-perform.component';
import { AccountComponent } from './account/account.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';
import { PacketEditComponent } from './tour/packet-edit/packet-edit.component';

const routes: Routes = [
  {path: '',redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tour', component: TourComponent, children: [
    {path: '', component: TourListComponent},
    {path: 'newtour', component: TourEditComponent},
    {path: ':tourid/edit', component: TourEditComponent},
    {path: 'newpacket', component: PacketEditComponent},
    {path: ':tourid/:packetid/edit', component: PacketEditComponent}
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
