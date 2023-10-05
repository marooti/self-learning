import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { RoutingComponent } from './pages/routing/routing.component';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import { ProblemSolvingComponent } from './problem-solving/problem-solving.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RoutingComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'problem-solving', component: ProblemSolvingComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RoutingComponent,
    VideoCallingComponent,
    ProblemSolvingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
