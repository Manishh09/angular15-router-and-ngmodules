import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card.component';
import { IconComponent } from './components/icon.component';



@NgModule({
  declarations: [
    CardComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    IconComponent
  ]
})
export class SharedModule { }
