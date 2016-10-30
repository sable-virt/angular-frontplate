import 'core-js/shim';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.NODE_ENV) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
