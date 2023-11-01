import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { CanActivateChildGuard } from 'src/app/core/guards/can-activate-child/can-activate-child.guard';
import { CanActivateGuard } from 'src/app/core/guards/can-activate/can-activate.guard';
import { CanLoadGuard } from 'src/app/core/guards/can-load/can-load.guard';

const routes: Routes = [
  { 
    path: 'settings', 
    component: SettingsComponent, 
    canActivate: [CanActivateGuard],
    children: [
      {
        path: '',
        canActivateChild: [CanActivateChildGuard],
        children: [
          {
            path: 'profile',
            loadChildren: () =>
              import('./profile/profile.module').then((m) => m.ProfileModule),
            canLoad: [CanLoadGuard]
          },
          {
            path: 'configuration',
            loadChildren: () =>
              import('./configuration/configuration.module').then(
                (m) => m.ConfigurationModule
              ),
            canLoad: [CanLoadGuard]
          },
          {
            path: '', redirectTo: 'profile', pathMatch: 'full'
          }
        ]
      }
      
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
