import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesComponent } from './shoes/shoes.component';
import { LoginComponent } from '@shoes/ui-login';
import { WildComponent } from './wild/wild.component';
import { ShoesItemComponent } from './shoes/shoes-item/shoes-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'shoes/:id', component: ShoesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
