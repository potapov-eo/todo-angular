import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const Modules : any[] = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: Modules,
  exports: Modules
})
export class MaterialModule { }
