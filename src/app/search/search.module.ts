import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NewsService } from '../domain/news.service';
import { SearchFormComponent } from './search-form.component';

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, NativeScriptFormsModule],
  declarations: [SearchComponent, SearchFormComponent],
  //providers:[NewsService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
