import { Component, OnInit } from '@angular/core';
import { Restaurant} from './restaurant/restaurant.model';
import { Title } from '@angular/platform-browser';
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  viewProviders: [Title]
})

export class RestaurantsComponent implements OnInit {

  restaurants : Restaurant[];

  constructor( title: Title, private restaurantsService : RestaurantsService ) {
    title.setTitle('::Restaurantes::');

  }

  ngOnInit() {
    // carrega as informações via api, com o metodo subscribe.
    try{
      this.restaurantsService.restaurants()
        .subscribe(restaurants => this.restaurants = restaurants);
    }catch(error){
    

    }

  }

}
