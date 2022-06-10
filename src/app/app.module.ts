import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { StoreModule } from '@ngrx/store'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NewsService } from './domain/news.service'

import { reducers, reducersInitialState } from './store';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './store/news/news.effect';
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    StoreModule.forRoot(reducers,{ initialState: reducersInitialState }),
    EffectsModule.forRoot([NewsEffects])
  ],
  providers:[NewsService],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
