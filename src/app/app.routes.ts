import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import 'rxjs/add/operator/map';
// import { } from 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// Imports para router lazy personalizado
import { Observable } from 'rxjs/Observable';

import { PreloadingStrategy, Route } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

// export class AppPreloadingStrategy implements PreloadingStrategy {
//     preload(route: Route, load: Function): Observable<any> {
//         const LOADROUTE = (delay) => delay ?
//               timer(150).pipe(flatMap(_ => load()))
//             : load();
//
//         return route.data && route.data.preload
//             ? LOADROUTE(route.data.delay)
//             : of(null);
//       }
// }

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, // o path restaurants/id possui dois filhos
    children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'}, // defini com o componente padrão da rota
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order-summary', component: OrderSummaryComponent},
   // Abaixo Rotas com Lazy Loading
  { path: 'about',
    loadChildren: './about/about.module#AboutModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
    data: { preload: false, delay: true },
  },


]
