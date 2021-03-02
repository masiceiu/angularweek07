import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'landing', component: LandingComponent},
  {
    path: 'district',
    loadChildren: () => import('./pages/district/district.module').then(d => d.DistrictModule)
  },
  { path: 'about', component: AboutComponent,
    data: {
      title: 'About'
    }, children: []
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent  }
];

// imports: [RouterModule.forRoot(routes)],
// imports: [RouterModule.forRoot(routes, { useHash: true })],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // https://codecraft.tv/courses/angular/routing/routing-strategies/#_hashlocationstrategy
  // RouterModule.forRoot(routes, { useHash: true});
}
