import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module'; // ton MaterialModule existant
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'; // Si tu utilises un fichier de routes

@NgModule({
  declarations: [
    AppComponent,
    // Ajoute ici les autres composants si besoin
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
