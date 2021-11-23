import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/general/home/home.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { InternalServerErrorComponent } from './public/errors/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    InternalServerErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
