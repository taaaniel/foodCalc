import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DishComponent } from '../dish/dish.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from './home.component';

const HOME_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent,  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dish', component: DishComponent},
    { path: 'product', component: ProductComponent}
  ]},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
