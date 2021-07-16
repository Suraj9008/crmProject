import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyDetailsComponent } from './view-company-details/view-company-details.component';
import { DemoComponent } from './demo/demo.component';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxonomyService } from '../../_services/taxonomy.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip'
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ConfirmBoxComponent } from '../../popups/confirm-box/confirm-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent,
    EditCompanyComponent,
    ViewCompanyDetailsComponent,
    DemoComponent,
    ConfirmBoxComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [TaxonomyService]
})
export class CompanyModule { }