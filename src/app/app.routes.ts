import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home',
	  component: HomeComponent
	},
	{ path: 'products',
	  loadChildren: () => import('./product/product.module').then(m =>m.ProductModule)
	},
	{ path: 'about-us',
		loadChildren: () => import('./media/media.module').then(m =>m.MediaModule )
	}
	];