import {NgModule} from '@angular/core'
import {AboutComponent} from './about.component'
import {Routes, RouterModule} from '@angular/router'

const ROUTES: Routes = [
  {path:'', component: AboutComponent}
];

// em modulos de carregamento tardio (lazy) não utiliza bootstrap
  @NgModule({
    declarations:[
      AboutComponent
    ],
    imports:[
      RouterModule,
      RouterModule.forChild(ROUTES)
    ]
    //exports:[]
    //para component Lazing, usa-se o chield
  })



export class AboutModule{}
