import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { DemoComponent } from './demo/demo.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyDetailsComponent } from './view-company-details/view-company-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'company'
    },
    children: [
      {
        path: '',
        redirectTo: 'company'
      },
      {
        path:'add-company',
        component: AddCompanyComponent,
        data: {
          title: 'add-company'
        }
      },
      {
        path:'company-list',
        component: CompanyListComponent,
        data: {
          title: 'company-list'
        }
      },
      {
        path:'edit-company',
        component: EditCompanyComponent,
        data: {
          title: 'edit-company'
        }
      },
      {
        path:'view-company-details',
        component: ViewCompanyDetailsComponent,
        data: {
          title: 'view-company-details'
        }
      },
      {
        path:'demo',
        component: DemoComponent,
        data: {
          title: 'demo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
