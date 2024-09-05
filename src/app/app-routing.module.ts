import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Ejercisio2Component } from "./ejercisio2/ejercisio2.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ejercisio', component: Ejercisio2Component }
];

