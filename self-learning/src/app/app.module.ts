import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { RoutingComponent } from './pages/routing/routing.component';

const routes: Routes = [
  { path: '', component: RoutingComponent },
  { path: 'counter', component: CounterComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
