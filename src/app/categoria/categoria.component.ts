import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { element } from 'protractor';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias = [{}];
  brindes = [{}];
  categoria = {id:0,name:"",slug:""};
  param;
  constructor(private api:ApiService, private route: ActivatedRoute,private router: Router) { 
    this.param = this.route.snapshot.paramMap.get("slug");

    this.getAllCategorias();
    this.getAllBrindes();
  }

  getAllCategorias = () => {
    this.api.getAllCategorias().subscribe(
      data => {
        this.categorias = data;
        this.categorias.forEach(element => {
          if (this.param == element["slug"]) {
              this.categoria.id = element["id"];
              this.categoria.name = element["name"];
              this.categoria.slug = element["slug"];
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  }
  getAllBrindes = () => {
    this.api.getAllBrindes().subscribe(
      data => {
        this.brindes = data;
        
      },
      error => {
        console.log(error)
      }
    )
  }

  onClickSubmitSearch(busca) {
    this.router.navigateByUrl('/busca/'+busca.campo_busca);
  }

  ngOnInit() {
    
  }

}
