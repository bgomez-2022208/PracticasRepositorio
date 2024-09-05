import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {routes} from "./app-routing.module";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
