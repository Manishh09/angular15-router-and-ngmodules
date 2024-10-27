import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from './core/guards/can-load/can-load.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent 
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },


  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'edit',
        component: EditAboutComponent
      }
    ]
  },

  {
    path: 'gallery',
    loadChildren: () => import('./features/gallery/gallery.module').then(m => m.GalleryModule)
  },
  
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
    canLoad: [CanLoadGuard],
  },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
