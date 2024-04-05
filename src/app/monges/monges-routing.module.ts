import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongesComponent } from './monges.component';
import { DetalheMongesComponent } from './detalhe-monges/detalhe-monges.component';

const routes: Routes = [
  { path: '', component: MongesComponent },
  {path: '/:{id}', component: DetalheMongesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongesRoutingModule { }
