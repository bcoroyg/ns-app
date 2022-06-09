import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './settings.component'
import { SettingsBusyComponent } from './settings-busy.component'

@NgModule({
  imports: [NativeScriptCommonModule, SettingsRoutingModule],
  declarations: [SettingsComponent, SettingsBusyComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
