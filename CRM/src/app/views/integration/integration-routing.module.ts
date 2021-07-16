import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbPixelComponent } from './fb-pixel/fb-pixel.component';
import { MailIntegrationComponent } from './mail-integration/mail-integration.component';
import { SmsIntegrationComponent } from './sms-integration/sms-integration.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'integration'
    },
    children: [
      {
        path: '',
        redirectTo: 'integration'
      },
      {
        path:'mail-integration',
        component: MailIntegrationComponent,
        data: {
          title: 'mail-integration'
        }
      },
      {
        path:'sms-integration',
        component: SmsIntegrationComponent,
        data: {
          title: 'sms-integration'
        }
      },
      {
        path:'fb-pixel',
        component: FbPixelComponent,
        data: {
          title: 'facebook-pixel'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
