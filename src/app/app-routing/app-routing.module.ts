import { ArteClienteComponent } from './../arte-cliente/arte-cliente.component';
import { PersonalizarComponent } from './../personalizar/personalizar.component';
import { BuscaComponent } from './../busca/busca.component';
import { BrindesComponent } from './../brindes/brindes.component';
import { ContentComponent } from './../content/content.component';
import { EmpresaComponent } from './../empresa/empresa.component';
import { CategoriaComponent } from './../categoria/categoria.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'personalizar-caneca-porcelana', component: PersonalizarComponent },
  { path: 'cliente/:id', component: ArteClienteComponent },
  { path: 'categoria/:slug', component: CategoriaComponent },
  { path: 'brindes/:categoria/:brinde', component: BrindesComponent },
  { path: 'busca/:busca', component: BuscaComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
      )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
