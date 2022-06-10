import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { EmailRoutingModule } from './email-routing.module'
import { EmailComponent } from './email.component'

@NgModule({
  imports: [NativeScriptCommonModule, EmailRoutingModule],
  declarations: [EmailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EmailModule {}
