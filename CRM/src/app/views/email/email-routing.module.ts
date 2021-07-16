import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { TemplateComponent } from './template/template.component';
import { NewEmailTemplateComponent } from './new-email-template/new-email-template.component';
import { MailChimpComponent } from './mail-chimp/mail-chimp.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { EmailLogsComponent } from './email/email-logs/email-logs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'email'
    },
    children: [
      {
        path: '',
        redirectTo: 'email'
      },
      {
        path: 'email',
        component: EmailComponent,
        data: {
          title: 'send-greetings'
        }
      },
      {
        path: 'email-logs',
        component: EmailLogsComponent,
        data: {
          title: 'email-logs'
        }
      },
      {
        path: 'new-email-template',
        component: NewEmailTemplateComponent,
        data: {
          title: 'add-email-template'
        }
      },
      {
        path: 'template',
        component: TemplateComponent,
        data: {
          title: 'edit-template'
        }
      },
      {
        path: 'template-list',
        component: TemplateListComponent,
        data: {
          title: 'template-list'
        }
      },
      {
        path: 'mail-chimp',
        component: MailChimpComponent,
        data: {
          title: 'mail-chimp'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
