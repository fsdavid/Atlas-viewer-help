import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';


const pagesRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'navigation', component: NavigationComponent},
  { path: 'search', component: SearchComponent},
  { path: 'api', component: ApiComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(pagesRoutes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
