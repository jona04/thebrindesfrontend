import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BrindesComponent } from './brindes/brindes.component';
import { BuscaComponent } from './busca/busca.component';
import { PersonalizarComponent } from './personalizar/personalizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    EmpresaComponent,
    CategoriaComponent,
    BrindesComponent,
    BuscaComponent,
    PersonalizarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
