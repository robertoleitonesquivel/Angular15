import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from '@Component/checkbox/checkbox.component';
import { FormReactivesComponent } from '@Component/form-reactives/form-reactives.component';
import { ProtectionRouteGuard } from '@Guards/protection-route.guard';


const routes: Routes = [
  // { path: '', redirectTo: 'Home', component: AppComponent, pathMatch: 'full' },
  {
    canActivate: [ProtectionRouteGuard],
    path: 'Checkbox',
    component: CheckboxComponent,
    title: 'Checkbox'
  },
  {
    canActivate: [ProtectionRouteGuard],
    path: 'Formularios',
    component: FormReactivesComponent,
    title: 'Formularios'
  },
  {
    canActivate: [ProtectionRouteGuard],
    path: 'Standalone',
    loadComponent: () => import('@Component/standalone/standalone.component')
      .then(c => c.StandaloneComponent),
    title: 'Standalone'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
