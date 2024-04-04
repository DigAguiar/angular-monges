import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongesComponent } from './monges.component';

const routes: Routes = [{ path: '', component: MongesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongesRoutingModule { }
