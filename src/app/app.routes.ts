import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
	{
		path: '', redirectTo: '/home', pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	}];
 @NgModule({
 	imports: [RouterModule.forRoot(routes,
 	{
 		anchorScrolling: 'enabled'
 	})],
 	exports: [RouterModule]
 })

 export class AppRoutes{ }