import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictListComponent } from './district-list/district-list.component';
import {TableComponent} from '../../shared/component/table/table.component';
import {BdLocalPipe} from '../../shared/pipes/bd-local.pipe';
import {DistrictRoutingModule} from './district-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BdLocalPipe,
    TableComponent,
    DistrictListComponent
  ],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    FormsModule
  ]
})
export class DistrictModule { }
