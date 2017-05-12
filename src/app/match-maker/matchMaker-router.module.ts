//src/+app/home/home-routing.ts

import { ModuleWithProviders } from '@angular/core';

import { Routes, 
         CanLoad,
         CanActivate,
         CanActivateChild,
         CanDeactivate,
         RouterModule  } from '@angular/router';

import { MatchMakerMainComponent } from './matchMakerMain.component';
import { MatchMakerHomeComponent } from './components/matchMakerHome.component';
import { GetMarriedComponent } from './components/getMarried.component'
import { MakeABabyComponent } from './components/makeABaby.component'

export const matchMakerRoutes: Routes = [
  { path: '',
     component: MatchMakerMainComponent,
     children: [
         {  path: '',
            children:[
                { path: 'makeABaby', component: MakeABabyComponent },
                { path: 'getMarried', component: GetMarriedComponent },
                { path: '', component: MatchMakerHomeComponent},
                
            ]
         }
     ]
     },
];

export const matchMakerRouting: ModuleWithProviders = RouterModule.forChild(matchMakerRoutes)