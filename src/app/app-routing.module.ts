import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MainComponent } from './core/main/main.component';
import { UsersComponent } from './usuario/users/users.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Início',
      icon: 'dashboard',
      active: false
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users',
      icon: 'dashboard',
      active: false
    }
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: {
      acitve: false
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      acitve: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
