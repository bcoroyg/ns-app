import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { registerElement } from '@nativescript/angular';
import { AppModule } from './app/app.module';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
registerElement('PullToRefresh', () => PullToRefresh);
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

