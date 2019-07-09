import { BuscaComponent } from './../busca/busca.component';
import { BrindesComponent } from './../brindes/brindes.component';
import { ContentComponent } from './../content/content.component';
import { EmpresaComponent } from './../empresa/empresa.component';
import { CategoriaComponent } from './../categoria/categoria.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'categoria/:slug', component: CategoriaComponent },
  { path: 'brindes/:categoria/:brinde', component: BrindesComponent },
  { path: 'busca/:busca', component: BuscaComponent },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
