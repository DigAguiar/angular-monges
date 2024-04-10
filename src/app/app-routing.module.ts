import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMongeComponent } from './components/add-monge/add-monge.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'monges', loadChildren: () => import('./monges/monges.module').then(m => m.MongesModule) },
  { path: '', redirectTo: "monges", pathMatch: 'full' },
  { path: 'add-monge', component: AddMongeComponent },
  {path: '**', component: PageNotFoundComponent}

]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
