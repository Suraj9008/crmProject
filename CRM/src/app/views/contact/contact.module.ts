import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { ViewContactDetailsComponent } from './view-contact-details/view-contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImportComponent } from './import/import.component';
@NgModule({
  declarations: [
    AddContactComponent,
    ContactListComponent,
    ViewContactDetailsComponent,
    EditContactComponent,
    ImportComponent
  ],
  exports: 
  [ContactListComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule
  ],
  bootstrap: [ContactListComponent]
})
export class ContactModule { }