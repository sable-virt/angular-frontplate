import './vendor';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot-compiled/src/js/app/app.module.ngfactory';
if (process.env.NODE_ENV) {
  enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);