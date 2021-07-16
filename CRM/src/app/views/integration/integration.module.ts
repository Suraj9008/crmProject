import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationRoutingModule } from './integration-routing.module';
import { MailIntegrationComponent } from './mail-integration/mail-integration.component';
import { SmsIntegrationComponent } from './sms-integration/sms-integration.component';
import { FbPixelComponent } from './fb-pixel/fb-pixel.component';
@NgModule({
  declarations: [
    MailIntegrationComponent,
    SmsIntegrationComponent,
    FbPixelComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule { }
