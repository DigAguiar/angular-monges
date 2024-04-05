import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongesComponent } from './monges/monges.component';
import { AddMongeComponent } from './components/add-monge/add-monge.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'monge-routing', loadChildren: () => import('./monges/monges.module').then(m => m.MongesModule) },
  { path: '', component: MongesComponent, pathMatch: 'full' },
  { path: 'add-monge', component: AddMongeComponent },
  {path: '**', component: PageNotFoundComponent}

]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
