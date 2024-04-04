import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongesRoutingModule } from './monges-routing.module';
import { MongesComponent } from './monges.component';
import { DetalheMongesComponent } from './detalhe-monges/detalhe-monges.component';


@NgModule({
  declarations: [
    MongesComponent,
    DetalheMongesComponent
  ],
  imports: [
    CommonModule,
    MongesRoutingModule
  ]
})
export class MongesModule { }
