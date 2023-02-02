import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    MatCheckboxModule
  ]
})
export class MaterialModule { }
