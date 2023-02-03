import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


const modulos = [
  MatToolbarModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: modulos,
  exports: modulos
})
export class MaterialModule { }
