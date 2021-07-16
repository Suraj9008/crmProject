import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email/email.component';
import { TemplateComponent } from './template/template.component';
import { NewEmailTemplateComponent } from './new-email-template/new-email-template.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../_services/country.service';
import { MailChimpComponent } from './mail-chimp/mail-chimp.component';
import { TemplateListComponent } from './template-list/template-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmailLogsComponent } from './email/email-logs/email-logs.component';
@NgModule({
  declarations: [
    EmailComponent,
    TemplateComponent,
    NewEmailTemplateComponent,
    MailChimpComponent,
    TemplateListComponent,
    EmailLogsComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [CountryService],
})
export class EmailModule { }
