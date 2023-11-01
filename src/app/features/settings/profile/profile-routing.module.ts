import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate/can-deactivate.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProfileComponent ,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
