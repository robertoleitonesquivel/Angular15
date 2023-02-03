import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from '@Component/checkbox/checkbox.component';
import { FormReactivesComponent } from '@Component/form-reactives/form-reactives.component';
import { ProtectionRouteGuard } from '@Guards/protection-route.guard';


const routes: Routes = [
  // { path: '', redirectTo: 'Home', component: AppComponent, pathMatch: 'full' },
  {

    path: 'Checkbox',
    component: CheckboxComponent,
    title: 'Checkbox'
  },
  {

    path: 'Formularios',
    component: FormReactivesComponent,
    title: 'Formularios'
  },
  {

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
