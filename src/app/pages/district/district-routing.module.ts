import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DistrictListComponent} from './district-list/district-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DistrictListComponent  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
