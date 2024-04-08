import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongesRoutingModule } from './monges-routing.module';
import { MongesComponent } from './monges.component';
import { DetalheMongesComponent } from './detalhe-monges/detalhe-monges.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    MongesComponent,
    DetalheMongesComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MongesRoutingModule
  ]
})
export class MongesModule { 

}
