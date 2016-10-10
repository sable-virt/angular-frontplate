import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
// import { AppModuleNgFactory } from "./app/app.module.ngfactory";
const platform = platformBrowserDynamic();

if (process.env.NODE_ENV) {
  enableProdMode();
}
platform.bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
