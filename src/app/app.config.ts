import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  bootstrapApplication,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ],
};
