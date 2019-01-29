import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}, // Rota para módulo LAZY loadING
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, // o path restaurants/id possui dois filhos
    children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'}, // defini com o componente padrão da rota
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},

]
