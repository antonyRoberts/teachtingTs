//src/+app/home/home-routing.ts

import { ModuleWithProviders } from '@angular/core';

import { Routes, 
         CanLoad,
         CanActivate,
         CanActivateChild,
         CanDeactivate,
         RouterModule  } from '@angular/router';

import { HomeMainComponent } from './homeMain.component';
import { HomeComponent } from './components/home.component';

export const homeRoutes: Routes = [
  { path: '',
     component: HomeMainComponent,
     children: [
         {  path: '',
            children:[
                { path: '', component: HomeComponent},
                
            ]
         }
     ]
     },
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes)