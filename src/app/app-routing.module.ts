import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelViewComponent} from './components/hotelview/hotelview.component';

const routes: Routes = [
  {path: 'hotel/:hotel-id', component: HotelViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
