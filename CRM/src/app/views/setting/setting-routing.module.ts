import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
      {
        path: 'taxonomy',
        loadChildren: () => import('./taxonomy/taxonomy.module').then(m => m.TexonomyModule)
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
