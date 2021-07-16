import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanTableComponent } from './loan-table/loan-table.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'loans'
    },
    children: [
      {
        path: '',
        redirectTo: 'loans'
      },
      {
        path:'add-loan',
        component: AddLoanComponent,
        data: {
          title: 'add-loan'
        }
      },
      {
        path:'loan-table',
        component: LoanTableComponent,
        data: {
          title: 'loan-logs'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
