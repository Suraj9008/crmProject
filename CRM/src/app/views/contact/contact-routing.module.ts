import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ImportComponent } from './import/import.component';
import { ViewContactDetailsComponent } from './view-contact-details/view-contact-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'contact'
    },
    children: [
      {
        path: '',
        redirectTo: 'contact'
      },
      {
        path: 'add-contact',
        component: AddContactComponent,
        data: {
          title: 'add-contact'
        }
      },
      {
        path: 'contact-list',
        component: ContactListComponent,
        data: {
          title: 'contact-list'
      }
      },
      {
        path: 'view-contact-details',
        component: ViewContactDetailsComponent,
        data: {
          title: 'view-contact-details'
        }
      },
      {
        path: 'edit-contact',
        component: EditContactComponent,
        data: {
          title: 'edit-contact'
        }
      },
      {
        path: 'import',
        component: ImportComponent,
        data: {
          title: 'import contact'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }