import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeMainComponent } from './homeMain.component';
import { HomeComponent } from './components/home.component';

//import { HomeRoutingModule, homeRoutes } from './home-routing.module';
import { RouterModule } from '@angular/router'; 

import { homeRoutes } from './home-router.module';
import { PeopleService } from '../_services/people.service';

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeMainComponent,
    HomeComponent
  ],
  providers: [PeopleService]
})
export class HomeModule { }
