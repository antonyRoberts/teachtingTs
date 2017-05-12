import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import { SelectivePreloadingStrategy } from './selective-preloading-strategy'

//import { CrisisListComponent }   from './crisis-list.component';
// import { HeroListComponent }  from './hero-list.component';  // <-- delete this line
//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
//  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'matchMaker',  loadChildren: './match-maker/match-maker.module#MatchMakerModule' }, // <-- delete this line
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      , { preloadingStrategy: PreloadAllModules }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}