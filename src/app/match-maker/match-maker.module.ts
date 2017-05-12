import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

import { PeopleService } from '../_services/people.service';

import { matchMakerRoutes } from './matchMaker-router.module';

import { MatchMakerMainComponent } from './matchMakerMain.component';
import { MatchMakerHomeComponent } from './components/matchMakerHome.component';
import { GetMarriedComponent } from './components/getMarried.component';
import { MakeABabyComponent } from './components/makeABaby.component';

import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(matchMakerRoutes)
  ],
  declarations: [ MatchMakerMainComponent,
                  MatchMakerHomeComponent,
                  GetMarriedComponent,
                  MakeABabyComponent,
                  GenderPipe ],
  providers: [ PeopleService ]
})
export class MatchMakerModule { }
