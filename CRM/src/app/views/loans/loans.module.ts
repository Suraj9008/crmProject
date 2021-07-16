import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanTableComponent } from './loan-table/loan-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'

@NgModule({
  declarations: [
    AddLoanComponent,
    LoanTableComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class LoansModule { }
