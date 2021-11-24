import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {path: 'navigation',component: CardComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
